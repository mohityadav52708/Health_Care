function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');

    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    appendMessage('user', userMessage);
    userInput.value = '';

    // Simulate a response from the bot (replace with actual chatbot logic)
    const botResponse = getBotResponse(userMessage);
    setTimeout(() => {
        appendMessage('bot', botResponse);
    }, 500);
}

function appendMessage(sender, message) {
    const chatBody = document.getElementById('chatBody');

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message', sender === 'bot' ? 'bot' : 'user');
    messageContainer.innerHTML = `<p>${message}</p>`;

    chatBody.appendChild(messageContainer);
    chatBody.scrollTop = chatBody.scrollHeight;

}
function getBotResponse(userMessage) {
    if (userMessage.toLowerCase().includes('symptoms')) {
        return "If you're experiencing specific symptoms, it's important to consult with a healthcare professional for accurate advice.";
    }

    if (userMessage.toLowerCase().includes('medication')) {
        return "I'm not a doctor, but I can provide general information. Please consult with a healthcare professional for personalized advice on medications.";
    }

    if (userMessage.toLowerCase().includes('health advice')) {
        return "For personalized health advice, it's recommended to consult with a healthcare professional.";
    }
    if (userMessage.toLowerCase().includes('what is your name')) {
        return "I am your assistant made by RGM sir";
    }

    // Default response
    return "I'm a healthcare chatbot. I'm here to assist you with health-related questions.";
}