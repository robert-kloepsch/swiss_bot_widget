import './widget.css';

function initializeChatWidget() {
    const container = document.getElementById('chat-widget-container');
    if (!container) {
        console.error('Chat widget container not found');
        return;
    }

    const userId = container.getAttribute('data-user-id');
    if (!userId) {
        console.error('User ID not found');
        return;
    }

    const chatWidgetIcon = document.createElement('div');
    chatWidgetIcon.className = 'chat-widget-icon';
    chatWidgetIcon.innerHTML = '💬';

    const chatWindow = document.createElement('div');
    chatWindow.className = 'chat-window hidden';

    chatWindow.innerHTML = `
        <div class="chat-header">
            <span>Chat with us!</span>
            <button class="close-btn close-chat-widget-icon">X</button>
        </div>
        <div class="chat-body"></div>
        <div class="chat-footer">
            <input type="text" class="chat-input" placeholder="Type your message...">
            <button class="send-message"><i class="widget-send-icon">Send</i></button>
        </div>
    `;

    container.appendChild(chatWidgetIcon);
    container.appendChild(chatWindow);

    const closeChatBtn = chatWindow.querySelector('.close-btn');
    const chatBody = chatWindow.querySelector('.chat-body');
    const chatInput = chatWindow.querySelector('.chat-footer input');
    const sendMessageBtn = chatWindow.querySelector('.send-message');
    let sessionId = generateSessionId();

    chatWidgetIcon.addEventListener('click', function () {
        chatWindow.style.display = 'flex';
        document.body.classList.add('no-scroll');
        if (chatBody.childElementCount === 0) {
            fetchWelcomeMessage();
        }
    });

    closeChatBtn.addEventListener('click', function () {
        chatWindow.style.display = 'none';
        document.body.classList.remove('no-scroll');
    });

    sendMessageBtn.addEventListener('click', function () {
        sendMessage();
    });

    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function generateSessionId() {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 10000) + 1;
        return `${timestamp}-${randomNum}`;
    }

    async function fetchWelcomeMessage() {
        try {
            const response = await fetch(`https://chat.swiss-bot.com/api/welcome_message?user_id=${userId}`);
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

            try {
                const response = await fetch(`https://chat.swiss-bot.com/api/chatbot_response?user_input=${encodeURIComponent(message)}&session_id=${sessionId}&user_id=${userId}&language=english`);
                const data = await response.json();
                appendMessage(data.response, 'bot');
            } catch (error) {
                console.error('Error fetching chatbot response:', error);
                appendMessage('Failed to get response from server.', 'bot');
            } finally {
                setLoading(false);
            }
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
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function setLoading(isLoading) {
        if (isLoading) {
            const loadingDots = document.createElement('div');
            loadingDots.className = 'loading-dots';
            loadingDots.innerHTML = '<div></div><div></div><div></div>';
            chatBody.appendChild(loadingDots);
            chatBody.scrollTop = chatBody.scrollHeight;
        } else {
            const loadingDots = document.querySelector('.loading-dots');
            if (loadingDots) {
                loadingDots.remove();
            }
        }
    }
}

initializeChatWidget();
