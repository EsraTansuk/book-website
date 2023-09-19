
const authPage = {
  init() {
    this.tabs();
    
  },

  tabs() {
    const goToRegisterTabBtn = document.getElementById("goToRegisterTab");
    const goToLoginTabBtn = document.getElementById("goToLoginTab");

    const registerTabEl = document.getElementById(goToRegisterTabBtn.dataset.target);
    const loginTabEl = document.getElementById(goToLoginTabBtn.dataset.target);

    const toggleTab = (firstEl, secondEl) => {
      firstEl.classList.add("active");
      secondEl.classList.remove("active");

      setTimeout(() => {
        firstEl.classList.add("show");
        secondEl.classList.remove("show");
      }, 150);
    };

    goToRegisterTabBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleTab(registerTabEl, loginTabEl);
    });

    goToLoginTabBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleTab(loginTabEl, registerTabEl);
    });
  },

  
};

export {authPage};
