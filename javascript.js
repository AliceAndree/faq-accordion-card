var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      (panel.style.maxHeight = null);
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.getElementById('button1').onclick = function(){
    document.getElementsByClassName('arrow')[0].classList.toggle("rotate");
  }

document.getElementById('button2').onclick = function(){
    document.getElementsByClassName('arrow')[1].classList.toggle("rotate");
  }  

document.getElementById('button3').onclick = function(){
    document.getElementsByClassName('arrow')[2].classList.toggle("rotate");
  }
  
document.getElementById('button4').onclick = function(){
    document.getElementsByClassName('arrow')[3].classList.toggle("rotate");
  }
  
document.getElementById('button5').onclick = function(){
    document.getElementsByClassName('arrow')[4].classList.toggle("rotate");
  }
  

