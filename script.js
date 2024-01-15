let chatInput = document.querySelector(".chat-textarea textarea");
let sendBtn = document.querySelector(".chat-textarea span");
let msgHistoryDiv = document.querySelector(".msg-history");

const responses = [
  "No problem! Let me connect you to a customer support agent.",
  "Hi there! I’m Hannah.<br /> How can I help you?",
  "Please hold on while I process your request",
];
let responseIndex = 0; // Keep track of the current response index
// function to create a div along with the h4 elements that will house the messages
const createChatDiv = (message, className) => {
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);

  let chatContent = `<h4>${message}</h4>`;
  chatDiv.innerHTML = chatContent;
  return chatDiv;
};

// onclick function
let lastOutgoingTimestampAdded = false;
let lastIncomingTimestampAdded = false;

const outgoingMsg = () => {
  let userMessage = chatInput.value.trim();
  if (!userMessage) return;

  // Remove previous outgoing timestamp if exists
  if (lastOutgoingTimestampAdded) {
    const lastOutgoingTimestamp = document.getElementById("time-stamp2");
    if (lastOutgoingTimestamp) {
      lastOutgoingTimestamp.remove();
    }
  }

  const userChatDiv = createChatDiv(userMessage, "outgoing-msg");
  msgHistoryDiv.appendChild(userChatDiv);

  // Use the current response based on the responseIndex
  const currentResponse = responses[responseIndex];
  responseIndex = (responseIndex + 1) % responses.length;

  let timeStamp2 = document.createElement("p");
  timeStamp2.innerHTML = `<p id="time-stamp2">Just now・Not seen yet</p>`;
  msgHistoryDiv.appendChild(timeStamp2);
  lastOutgoingTimestampAdded = true;

  // Remove previous incoming timestamp if exists
  if (lastIncomingTimestampAdded) {
    const lastIncomingTimestamp = document.getElementById("time-stamp1");
    if (lastIncomingTimestamp) {
      lastIncomingTimestamp.remove();
    }
  }

  const alignDpDiv = document.createElement("div");
  alignDpDiv.classList.add("align-dp");

  const incomingChatDiv = createChatDiv(currentResponse, "incoming-msg");
  const incomingImage = document.createElement("img");
  incomingImage.classList.add("image-icon");
  incomingImage.src = "avatars (1).png";
  incomingImage.alt = "dp";

  alignDpDiv.appendChild(incomingImage);
  alignDpDiv.appendChild(incomingChatDiv);

  msgHistoryDiv.appendChild(alignDpDiv);

  let timeStamp1 = document.createElement("p");
  timeStamp1.innerHTML = `<p id="time-stamp1">Hannah・Just now</p>`;
  msgHistoryDiv.appendChild(timeStamp1);
  lastIncomingTimestampAdded = true;

  chatInput.value = "";
};
sendBtn.addEventListener("click", outgoingMsg);

// Toggle button
const toggleButton = document.querySelector(".chatbot-trigger");
const chatBot = document.querySelector(".chatbot");
const icon = toggleButton.querySelector(".icon");

function toggleBtn() {
  if (chatBot.style.display === "none" || chatBot.style.display === "") {
    chatBot.style.display = "block";
    icon.style.transform = "rotate(180deg)";
  } else {
    chatBot.style.display = "none";
    icon.style.transform = "rotate(0deg)";
  }
}

toggleButton.addEventListener("click", toggleBtn);
console.log("toggleButton:", toggleButton);