var nav2 = document.getElementById('nav');

window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.scrollY > 0) {
      nav.classList.add('scroll')
    } else {
     nav.classList.remove('scroll')
    }
  }

  

  var btn9 = document.getElementById("btn2")
  btn2.onclick = function(){
    location.href = "contact.html"
  }

  var btn8 = document.getElementById("btn1")
  btn1.onclick = function(){
    location.href = "about.html"
  }

  var btn7 = document.getElementById("btn")
  btn.onclick = function(){
    location.href = "product.html"
  }