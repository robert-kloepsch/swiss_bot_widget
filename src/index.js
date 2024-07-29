import './widget.css';

function initializeChatWidget() {
    const container = document.getElementById('chat-widget-container');
    if (!container) {
        console.error('Chat widget container not found');
        return;
    }

    const botId = container.getAttribute('data-user-id');
    const themeColor = container.getAttribute('data-theme-color') || '#0082ba';
    const hoverColor = container.getAttribute('data-hover-color') || '#0595d3';
    if (!botId) {
        console.error('User ID not found');
        return;
    }

    const chatWidgetIcon = document.createElement('div');
    chatWidgetIcon.className = 'chat-widget-icon';
    chatWidgetIcon.innerHTML = '💬';

    const chatOverlay = document.createElement('div');
    chatOverlay.className = 'chat-overlay hidden';

    const chatWindow = document.createElement('div');
    chatWindow.className = 'chat-window hidden';

    chatWindow.innerHTML = `
        <div class="chat-header">
            <div class="chat-header-title">
                <span class="chat-title">Chat with us!</span>
                <button class="close-btn close-chat-widget-icon">X</button>
            </div>         
        </div>
        <div class="chat-body"></div>
        <div class="chat-footer">
            <div class="powered-by">
                <span class="powered-by-text" onclick="window.open('http://landing.swiss-bot.com/', '_blank')">Powered by Swiss Chatbot Factory</span>
            </div>
            <div class="input-send-container">
                <input type="text" class="chat-input" placeholder="Type your message...">
                <button class="send-message"><i class="widget-send-icon">Send</i></button>
            </div>
        </div>
    `;

    // Inject dynamic styles
    const style = document.createElement('style');
    style.innerHTML = `
        .chat-widget-icon {
            background-color: ${themeColor};
        }

        .chat-header {
            background-color: ${themeColor};
        }

        .chat-footer button {
            background-color: ${themeColor};
        }

        .widget-user-message {
            background-color: ${themeColor};
        }

        .loading-dots div {
            background-color: ${themeColor};
        }

        .chat-footer button:hover {
            background-color: ${hoverColor};
        }
    `;
    document.head.appendChild(style);

    container.appendChild(chatWidgetIcon);
    container.appendChild(chatOverlay);
    container.appendChild(chatWindow);

    const closeChatBtn = chatWindow.querySelector('.close-btn');
    const chatBody = chatWindow.querySelector('.chat-body');
    const chatInput = chatWindow.querySelector('.chat-footer input');
    const sendMessageBtn = chatWindow.querySelector('.send-message');
    let sessionId = generateSessionId();
    let currentBotMessage = '';

    chatWidgetIcon.addEventListener('click', function () {
        chatWindow.classList.remove('hidden');
        forceReflow(chatWindow);
        chatWindow.classList.add('show');
        chatOverlay.classList.remove('hidden');
        document.body.classList.add('no-scroll');
        if (chatBody.childElementCount === 0) {
            fetchWelcomeMessage();
        }
    });

    closeChatBtn.addEventListener('click', function () {
        chatWindow.classList.remove('show');
        chatOverlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        setTimeout(() => chatWindow.classList.add('hidden'), 500); // Match the transition duration
    });

    chatOverlay.addEventListener('click', function () {
        chatWindow.classList.remove('show');
        chatOverlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        setTimeout(() => chatWindow.classList.add('hidden'), 500); // Match the transition duration
    });

    sendMessageBtn.addEventListener('click', function () {
        sendMessage();
    });

    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function forceReflow(element) {
        element.offsetHeight; // Read the height to force a reflow
    }

    function generateSessionId() {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 10000) + 1;
        return `${timestamp}-${randomNum}`;
    }

    async function fetchWelcomeMessage() {
        try {
            const response = await fetch(`http://192.168.1.14:5000/api/welcome_message?bot_id=${botId}`);
            const data = await response.json();
            const welcomeMessage = data.welcome_message || "Welcome to your virtual assistant! 😊 How can I assist you today?";
            appendMessage(welcomeMessage, 'bot');
        } catch (error) {
            console.error('Error fetching welcome message:', error);
            appendMessage("Failed to load welcome message from server.", 'bot');
        }
    }

    async function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            appendMessage(message, 'user');
            chatInput.value = '';
            setLoading(true);
            currentBotMessage = '';

            try {
                const eventSource = new EventSource(`http://192.168.1.14:5000/api/chatbot_response?user_input=${encodeURIComponent(message)}&session_id=${sessionId}&bot_id=${botId}&language=english`);

                eventSource.onmessage = (event) => {
                    const chunk = event.data;
                    if (chunk !== 'end of response') {
                        const parsedChunk = chunk.replace(/<newline>/g, '\n');
                        currentBotMessage += parsedChunk;
                        updateBotMessage(currentBotMessage);
                        scrollToBottom();
                    }
                };

                eventSource.onerror = (error) => {
                    console.error('Error fetching response:', error);
                    if (loading) {
                        appendMessage('Failed to get response from server.', 'bot');
                        setLoading(false);
                    }
                    eventSource.close();
                };

                eventSource.onopen = () => {
                    setLoading(false);
                };

                eventSource.addEventListener('end', () => {
                    updateBotMessage(currentBotMessage);
                    eventSource.close();
                    setLoading(false);
                    scrollToBottom();
                });

            } catch (error) {
                console.error('Error fetching response:', error);
                appendMessage('Failed to get response from server.', 'bot');
                setLoading(false);
            }
        }
    }

    function updateBotMessage(text) {
        const lastMessage = chatBody.lastElementChild;
        if (lastMessage && lastMessage.classList.contains('widget-bot-message')) {
            lastMessage.innerHTML = marked.parse(text);
        } else {
            appendMessage(text, 'bot');
        }
    }

    function appendMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = `widget-message widget-${sender}-message`;

        // Render Markdown for bot messages
        if (sender === 'bot') {
            messageElement.innerHTML = marked.parse(text);
        } else {
            messageElement.textContent = text;
        }

        chatBody.appendChild(messageElement);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function setLoading(isLoading) {
        if (isLoading) {
            const loadingDots = document.createElement('div');
            loadingDots.className = 'loading-dots';
            loadingDots.innerHTML = '<div></div><div></div><div></div>';
            chatBody.appendChild(loadingDots);
            scrollToBottom();
        } else {
            const loadingDots = document.querySelector('.loading-dots');
            if (loadingDots) {
                loadingDots.remove();
            }
        }
    }
}

initializeChatWidget();
