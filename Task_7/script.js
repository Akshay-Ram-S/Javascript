const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Function to get the current time in HH:MM format
const getCurrentTime = () => {
  const now = new Date();
  return `${String(now.getHours())}:${String(now.getMinutes()).padStart(
    2,
    "0"
  )}`;
};

// Function to append a message to the chat
const appendMessage = (message, sender) => {
  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-message ${sender}`;
  msgDiv.innerHTML = `
    <div class="message-content">${message}</div>
    <div class="timestamp">${getCurrentTime()}</div>
  `;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the latest message
};

// Simulate a bot response with a random message
const simulateBotMessage = () => {
  const botMessages = [
    "Hello! How can I help you today?",
    "I'm here to assist you. What do you need?",
    "I can provide you with the information you're looking for.",
    "Feel free to ask me anything!",
  ];

  setTimeout(
    () =>
      appendMessage(
        botMessages[Math.floor(Math.random() * botMessages.length)],
        "bot"
      ),
    2000
  );
};

// Event listener for sending messages
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message) {
    appendMessage(message, "user");
    userInput.value = "";
    simulateBotMessage();
  }
});

// Send message on pressing Enter
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
