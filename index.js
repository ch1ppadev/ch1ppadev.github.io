function sendMessage() {
    var message = document.getElementById("messageInput").value;
    var webhookUrl = 'https://discord.com/api/webhooks/1280454192657596429/zLDRUpCo8XDNsKL2fSZW5LlyFv4l5m6LDVkXoTee6tuRUSHSlAvGWFvVHWY0FhuRnlcx';
    
    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0]; // Get the first selected file
    
    var formData = new FormData();
    formData.append("file", file);
    formData.append("content", message);
    
    fetch(webhookUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
}