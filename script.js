
{/* Function to simulate sending a message */ }
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageContent = messageInput.value.trim();

    const snappyResponsesArr = ['ur iron', 'shut up kid', 'im gonna kms', 'pony ur old', 'I LOVE BARRETT!!', 'idontcyarekid',messageContent];
    const randomSnappyResponse = getRandomItem(snappyResponsesArr);


    function getRandomItem(snappyResponsesArr) {
        const randomIndex = Math.floor(Math.random() * snappyResponsesArr.length);
        return snappyResponsesArr[randomIndex];
    }

    if (messageContent) {
        // Add the message to the chat box
        displayMessage('You', messageContent);


        setTimeout(() => {
            displayMessage('Snappy', randomSnappyResponse);
        }, 1000);
        //Clear input field
        messageInput.s = '';
        console.log(randomSnappyResponse);

    }

}


// Function to display a message in the chat box
function displayMessage(sender, randomSnappyResponse) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    // messageDiv.innerHTML = `<strong>${sender}:</strong> ${randomSnappyResponse}`;
    messageDiv.innerHTML = `<span style='color:#151515'>${sender}:</span> <span style='span style='color:#151515'>${randomSnappyResponse}</span>`;

    chatBox.appendChild(messageDiv);


    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}
