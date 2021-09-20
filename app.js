
const sidebar =  document.getElementById("mySidebar");
const main =document.getElementById("main")
const searchIp = document.querySelector('.searchInput input')




function openNav() {
    
    if(sidebar.offsetWidth == 0) {
        sidebar.style.width = "300px";
        // main.style.marginLeft = "320px";
    } else {
        window.sidebar = true
        isOpen = false
        sidebar.style.width = "0";
        main.style.marginLeft = "20px";
    }
  }
  
  const bookmarkBar =  document.querySelector('.bookmarkBar')

  function openBookmark () {

    // if (window.innerWidth > 1100) {
    //   return 
    // }
 
    if(bookmarkBar.offsetWidth == 0) {
        bookmarkBar.style.width = "300px";
      //  main.style.marginRight = "320px";

    } else {
      bookmarkBar.style.width = "0";
      main.style.marginRight = "20px";

    }
  }

//   For SideBAr Indicator

  const sideBar =  document.querySelector('.sidebar > ul')
  const sideBarItems = document.querySelectorAll('.sidebar > ul a')

  sideBar.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.tagName == "SPAN" || e.target.tagName == "A") {
        sideBarItems.forEach(item => {
            if(item.classList.contains('active')) {
             item.classList.remove('active')
            }
        })
    }

    if(e.target.tagName == "A") {
      e.target.classList.add('active')
    } else if(e.target.tagName == "SPAN") {
        e.target.parentElement.classList.add('active')
    }

  })

  //  Sidebars Responsive

  window.addEventListener("resize", makeResponsive);
  window.addEventListener("load", makeResponsive);


  function makeResponsive () {
    if (window.innerWidth < 1100 && bookmarkBar.offsetWidth == 300) {
      openBookmark()
    }
    if(window.innerWidth < 900 && sidebar.offsetWidth == 300 ) {
      openNav()
    }

  }