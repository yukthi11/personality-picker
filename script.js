const changeColor = document.getElementById("indexbody");
const clickMeBtn = document.getElementById("clickmebtn");
  const greet = document.getElementById("greeting")


//name pop-up
const askName = () => {
    let userInput = prompt("Please enter your name:");          
    while (!userInput || userInput.trim() === "") {
        userInput = prompt("Input is required. Please enter your name:");
    }
    greet.textContent = "Hi, " + userInput + "!";
}

// Only run askName() if we're on index.html
if (window.location.pathname.toLowerCase().endsWith('index.html')) {
    askName();
}
 
//background color changer
 const diffColors = ["#C8AAAA", "#E7D4B5", "#FFE9D0", "#BBE9FF", "#B1AFFF", "#ACE1AF", "#A87676", "#F6F5F2"];

 function getRandomElement(arr) {
     let randomIndex = Math.floor(Math.random() * arr.length);  
     return arr[randomIndex];
 }

 setInterval(function() {
     changeColor.style.backgroundColor = getRandomElement(diffColors);
 }, 2000);

 //box content
 function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    if (modal && modalContent) {
        modal.style.display = "block";
        modalContent.style.display = "block";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    if (modal && modalContent) {
        modal.style.display = "none";
        modalContent.style.display = "none";
    }
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        const modalContent = event.target.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.display = "none";
        }
    }
}


