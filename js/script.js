const menuBtn=document.querySelector(".header .mobile-menuBtn"),menuNav=document.querySelector(".header .nav-menu-header");menuNav.classList.add("menuInactive"),menuBtn.onclick=function(){menuNav.classList.remove("menuInactive"),setTimeout(function(){menuNav.classList.toggle("menuActive")},0),menuNav.classList.contains("menuActive")&&setTimeout(function(){menuNav.classList.add("menuInactive")},200)},$(menuBtn).clickout(function(e){menuNav.contains(e.target)||(menuNav.classList.remove("menuActive"),setTimeout(function(){menuNav.classList.add("menuInactive")},200))});