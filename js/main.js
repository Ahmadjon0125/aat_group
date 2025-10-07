  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  const lanBtnVal = document.getElementById("lanBtnVal");

  langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("show");
    
  });

   langMenu.addEventListener("click", (e) => {
    console.log(e.target.innerText)
    lanBtnVal.textContent =e.target.innerText
    
  });

  // Menyudan tashqariga bosilganda yopiladi
  window.addEventListener("click", (e) => {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
      langMenu.classList.remove("show");
    
      
    }
  });



   const langBtn2 = document.getElementById("langBtn2");
  const langMenu2 = document.getElementById("langMenu2");
   const lanBtnVal2 = document.getElementById("lanBtnVal2");

  langBtn2.addEventListener("click", () => {
    langMenu2.classList.toggle("show");
  });

    langMenu2.addEventListener("click", (e) => {
    console.log(e.target.innerText)
    lanBtnVal2.textContent =e.target.innerText
    
  });
  

  // Menyudan tashqariga bosilganda yopiladi
  window.addEventListener("click", (e) => {
    if (!langBtn2.contains(e.target) && !langMenu2.contains(e.target)) {
      langMenu2.classList.remove("show");
    }
  });





const burgerBtn = document.getElementById('burgerBtn');

let isMenuOpen = false;

    // Toggle Menu
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        burgerBtn.classList.add('active');
        mobileMenu.classList.add('show');
        menuOverlay.classList.add('show');
        body.style.overflow = 'hidden';
        burgerBtn.setAttribute('aria-label', 'Закрыть меню');
      } else {
        closeMenu();
      }
    }

    // Close Menu
    function closeMenu() {
      isMenuOpen = false;
      burgerBtn.classList.remove('active');
      mobileMenu.classList.remove('show');
      menuOverlay.classList.remove('show');
      body.style.overflow = '';
      burgerBtn.setAttribute('aria-label', 'Открыть меню');
    }

        // Event Listeners
    burgerBtn.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', closeMenu);