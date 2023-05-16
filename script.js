// Seleksi DOM elements yang diperlukan

const textBox = document.querySelector(".captch_box input");
const refreshBut = document.querySelector(".refresh_button");
const inputBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const subButton = document.querySelector(".button");

// Variabel penyimpan captcha
let captchaText = null;

// Function untuk memunculkan captcha
// Function to generate captcha
const generateCaptcha = () => {
      const randomString = Math.random().toString(36).substring(2, 7);
      const randomStringArray = randomString.split("");
      const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
      captchaText = changeString.join("   ");
      textBox.value = captchaText;
      console.log(captchaText);
    };
    
    const refreshBtnClick = () => {
      generateCaptcha();
      inputBox.value = "";
      captchaKeyUpValidate();
    };
    
    const captchaKeyUpValidate = () => {
      //Toggle submit button disable class based on captcha input field.
      subButton.classList.toggle("disabled", !inputBox.value);
    
      if (!inputBox.value) message.classList.remove("active");
    };
    
    // Function to validate the entered captcha
    const submitBtnClick = () => {
      captchaText = captchaText
        .split("")
        .filter((char) => char !== " ")
        .join("");
      message.classList.add("active");
      // Check if the entered captcha text is correct or not
      if (inputBox.value === captchaText) {
        message.innerText = "Entered captcha is correct";
        message.style.color = "#826afb";
      } else {
        message.innerText = "Entered captcha is not correct";
        message.style.color = "#FF2525";
      }
    };
    
    // Add event listeners for the refresh button, inputBox, submit button
    refreshBut.addEventListener("click", refreshBtnClick);
    inputBox.addEventListener("keyup", captchaKeyUpValidate);
    subButton.addEventListener("click", submitBtnClick);
    
    // Generate a captcha when the page loads
    generateCaptcha();