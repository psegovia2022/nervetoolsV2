// ************* NAVIGATION HAMBURGER MENU *************
//******************************************************

// const hamNav = document.querySelector(".icon");
// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamNav.addEventListener("click", toggleMenu);

const icon = document.querySelector(".icon");
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  icon.addEventListener("click", myFunction);

//   const icon = document.querySelector(".icon");
//   const menu = document.querySelector(".menu");
//   const menuItems = document.querySelectorAll(".menuItem");
//   const closeIcon= document.querySelector(".closeIcon");
//   const menuIcon = document.querySelector(".menuIcon");
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav" && x.className === "showMenu" ) {
//       x.className += " responsive";
//       x.className.remove("showMenu");
//       closeIcon.style.display = "none";
//       menuIcon.style.display = "block";
//     } else {
//       x.className = "topnav";
//       x.className += "showMenu";
//       closeIcon.style.display = "block";
//       menuIcon.style.display = "none";

//     }
//   }

//   icon.addEventListener("click", myFunction);
