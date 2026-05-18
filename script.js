let recognition;
let listening = false;

function startListening() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Speech Recognition not supported in this browser.");
        return;
    }

    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
        listening = true;
        document.getElementById("status").innerText = "Listening...";
        document.getElementById("startBtn").disabled = true;
        document.getElementById("stopBtn").disabled = false;
    };

    recognition.onresult = (event) => {
        const transcript =
            event.results[event.results.length - 1][0].transcript.trim();

        document.getElementById("detected").innerText =
            "Detected: " + transcript;

        // COMMANDS
        handleCommand(transcript.toLowerCase());
    };

    recognition.onerror = (event) => {
        console.error(event.error);
    };

    recognition.start();
}

function stopListening() {
    if (recognition) {
        recognition.stop();
    }

    listening = false;

    document.getElementById("status").innerText = "Stopped";
    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
}

function handleCommand(command) {
    if (command.includes("black flash")) {
        alert("BLACK FLASH ACTIVATED");
    }

    if (command.includes("domain expansion")) {
        alert("DOMAIN EXPANSION");
    }

    if (command.includes("hollow purple")) {
        alert("HOLLOW PURPLE");
    }
}
