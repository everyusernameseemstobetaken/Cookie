
// ===== WEBSITE DESIGN =====

const style = document.createElement("style");

style.textContent = `
  body {
    margin: 0;
    background: #f0edff;
    font-family: Arial, sans-serif;
    text-align: center;
    color: #242038;
  }

  .screen {
    padding: 40px 20px;
    max-width: 800px;
    margin: auto;
  }

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 18px;
  }

  button {
    padding: 12px 25px;
    background: #7554d8;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
  }

  button:hover {
    background: #5335af;
  }

  img {
    width: 400px;
    max-width: 100%;
    border-radius: 15px;
  }
`;

document.head.appendChild(style);


// ===== WEBSITE CONTENT =====

const app = document.getElementById("app");


// ===== SCREEN 1: HOME =====

function showHome() {
  app.innerHTML = `
    <div class="screen">
      <h1>Welcome to My Website!</h1>

      <p>This is my first JavaScript website.</p>

      <button id="pictureButton">
        View Picture
      </button>
    </div>
  `;

  document.getElementById("pictureButton")
    .addEventListener("click", showPicture);
}


// ===== SCREEN 2: PICTURE =====

function showPicture() {
  app.innerHTML = `
    <div class="screen">
      <h1>My Picture</h1>

      <p>Here is a picture!</p>

      <img src="picture.jpg" alt="My Picture">

      <div>
        <button id="backButton">
          Go Back
        </button>
      </div>
    </div>
  `;

  document.getElementById("backButton")
    .addEventListener("click", showHome);
}


// ===== START WEBSITE =====

showHome();
