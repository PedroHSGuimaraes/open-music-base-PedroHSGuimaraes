function themeON() {
  const buttonDarkMode = document.querySelector(".dark-mode-button");
  const body = document.querySelector("body");
  
  let darkMode = false;
  
  function darkTheme() {
    darkMode = !darkMode;
    
    body.classList.toggle("dark-mode");
    
    if (darkMode) {
      buttonDarkMode.innerHTML = `<img src="./src/assets/img/sun.svg" alt="ligth">`;
    } else {
      buttonDarkMode.innerHTML = `<img src="./src/assets/img/moon.svg" alt="dark">`;
    }
    
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }
  
  buttonDarkMode.addEventListener("click", darkTheme);
  
  function getTheme() {
    darkMode = JSON.parse(localStorage.getItem("theme"));
    if (darkMode) {
      body.classList.add("dark-mode");
      buttonDarkMode.innerHTML = `<img  src="./src/assets/img/sun.svg" alt="ligth">`;
    }
  }
  
  getTheme();
}

themeON();
