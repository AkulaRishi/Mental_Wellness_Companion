document.getElementById('sendBtn').addEventListener('click', function () {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput) {
        appendMessage('User', userInput);
        analyzeMood(userInput);
        document.getElementById('userInput').value = '';
    }
});

function appendMessage(sender, message) {
    const chatlog = document.getElementById('chatlog');
    const newMessage = document.createElement('p');
    newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatlog.appendChild(newMessage);
    chatlog.scrollTop = chatlog.scrollHeight; // Auto-scroll to latest message
}

function analyzeMood(input) {
    let botResponse;
    
    // Simple sentiment-based AI to infer user's mood
    const positiveWords = ['happy', 'joyful', 'excited', 'grateful', 'calm', 'peaceful', 'relaxed', 'content'];
    const negativeWords = ['sad', 'depressed', 'angry', 'frustrated', 'anxious', 'stressed', 'lonely', 'overwhelmed', 'tired', 'exhausted'];

    let sentimentScore = 0;

    // Tokenize input and analyze mood
    input.toLowerCase().split(/\s+/).forEach(word => {
        if (positiveWords.includes(word)) {
            sentimentScore++;
        } else if (negativeWords.includes(word)) {
            sentimentScore--;
        }
    });

    // Generate response based on detected mood
    if (sentimentScore > 0) {
        botResponse = "It's great to hear that you're feeling positive! Keep enjoying your day and spread the positivity!";
    } else if (sentimentScore < 0) {
        botResponse = "I'm sorry to hear that you're feeling this way. Remember, you're not alone, and talking to someone you trust can help. Would you like some self-care tips?";
    } else {
        botResponse = "I'm here to listen. Can you tell me more about how you're feeling? Talking about it can really help.";
    }

    appendMessage('Bot', botResponse);
}
