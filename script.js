const increaseBtn = document.getElementById("no");
const targetBtn = document.getElementById("yes");
const txt = document.getElementById("valz");

  // Set initial size
let size = 16;

// Event listener to increase size
increaseBtn.addEventListener("click", function () {
    size += 5; // Increase size by 5px
    targetBtn.style.fontSize = size + "px";
    targetBtn.style.padding = (size / 3) + "px"; // Adjust padding proportionally
    // Add text
    txt.innerHTML += "valz";
});

targetBtn.addEventListener("click", function(){
    document.body.innerHTML = '<h1>LEsssgOOOO</h1>'; 
});