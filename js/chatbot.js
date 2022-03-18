let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Chatbot, your assistant", "Hi I am your trip planner", "I am your virtual assistant and, welcome to our website"];
let help = ["How may i assist you?", "How can i help you?", "What i can do for you?", "what is the favour that you want from me"];
let greetings = ["I am fine, what about you", "I am good and have a nice day ahead"];
let hobbies = ["Our motto is that, anyone can explore uttarakhand with the help of our website alone."];
let pizzas = ["Uttarakhand is best known for its rivers as it is the origin of some of the most sacred rivers of India like Ganga and Yamuna.", "Uttarakhand, a state in northern India crossed by the Himalayas, is known for its Hindu pilgrimage sites.", "The state is popularly known as Devbhumi (land of Gods) due to the presence of numerous Hindu pilgrimage sites."];
let sample = ["You can visit Auli, Almora, Kedarnath and many more."];
let thank = ["Most welcome", "Not an issue", "Its my pleasure", "Mention not"];
let closing = ['Ok bye-bye', 'As you wish, bye take-care', 'Bye-bye, see you soon..'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message) {
    const speech = new SpeechSynthesisUtterance();
    // speech.text = "This is test message";
    if (message.includes('who are you' || 'tell me about you')) {
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    } else if (message.includes('help me')) {
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    } else if (message.includes('how are you' || 'how are you doing today')) {
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    } else if (message.includes('what is the aim of your website' || 'tell me about your website')) {
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    } else if (message.includes('Uttarakhand' || 'Tell me about uttarakhand' || 'What is special about uttarakhand')) {
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = finalresult;
    } else if (message.includes('thank you' || 'thank you so much')) {
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    } else if (message.includes('bye')) {
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    } else if (message.includes('tell me some special places')) {
        let finalresult = sample[Math.floor(Math.random() * sample.length)];
        speech.text = finalresult;
    } else {
        speech.text = 'Sorry I cannot understand you.';
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function(e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend = function() {
    mic.style.background = "#ff3b3b";
}
mic.addEventListener("click", function() {
    mic.style.background = '#39c81f';
    recognition.start();
    console.log("Activated");
})