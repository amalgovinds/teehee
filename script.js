const increaseBtn = document.getElementById("no");
const targetBtn = document.getElementById("yes");
const txt = document.getElementById("valz");

  // Set initial size
let size = 30;

// Event listener to increase size
increaseBtn.addEventListener("click", function () {
    size += 5; // Increase size by 5px
    targetBtn.style.fontSize = size + "px";
    targetBtn.style.padding = (size / 3) + "px"; // Adjust padding proportionally
    // Add text
    txt.innerHTML += "Valz";
});

targetBtn.addEventListener("click", function(){
    document.body.innerHTML = `
    <div class="heart-container center">
        <img src="source.gif" style="width:300px;height:168.75.5px;" />
        <h1>LEESSSGGGGOOOOO</h1>
        <img src="bite.webp" />
        <h2>TeeHee</h2>
    </div>
    `; 
});

function createHeart() {
    const container = document.querySelector(".heart-container");
    const heart = document.createElement("div");
    heart.classList.add("heart");

    let size = Math.random() * 20 + 10; // Random size between 10px - 30px
    let posX = Math.random() * (container.clientWidth - size); // Ensure it stays within bounds
    let duration = Math.random() * 3 + 2; // Random duration between 2s - 5s

    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${posX}px`;
    heart.style.animationDuration = `${duration}s`;

    // Create the two circles for the heart shape
    const before = document.createElement("div");
    before.style.width = `${size}px`;
    before.style.height = `${size}px`;
    before.style.backgroundColor = "red";
    before.style.borderRadius = "50%";
    before.style.position = "absolute";
    before.style.top = `-${size / 2}px`;
    before.style.left = "0";

    const after = document.createElement("div");
    after.style.width = `${size}px`;
    after.style.height = `${size}px`;
    after.style.backgroundColor = "red";
    after.style.borderRadius = "50%";
    after.style.position = "absolute";
    after.style.top = "0";
    after.style.left = `${size / 2}px`;

    // Append circles to the heart
    heart.appendChild(before);
    heart.appendChild(after);

    container.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300); // Generate a heart every 300ms