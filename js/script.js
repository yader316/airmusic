function clickItems(){
    const doc= document;
    ctrlAccordion()
}

const ctrlAccordion = () => {
    var acc = Array.from(document.getElementsByClassName("accordion"));
var i;

    acc.forEach(ac => {
        ac.addEventListener('click', () =>{
            var panel = ac.nextElementSibling;
            if (panel.style.maxHeight) {
                ac.classList.toggle('active')
                panel.style.maxHeight = null;
            } else {
                closeAllTabs()
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
            })    
    })
}

const closeAllTabs = () => {
    const doc = document;
    const allTabs = Array.from(doc.querySelectorAll('.panel'));

    allTabs.forEach(tab => {
        tab.classList.remove('active');
    })

}
// menu
function myFunction(x) {
    x.classList.toggle("change");
}
// dropdown menu
function ctrlScript() {
    const doc = document;
    const element = doc.getElementById('header-container__drop-down-menu');

    element.addEventListener('click', showMenu)
}

const showMenu = () => {
    const doc = document;
    const menu = doc.querySelector('.header-container__menu').classList.toggle('active-menu')
}
// modal gallery 
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("section-container-five__img");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
  
// calling functions
ctrlScript()
clickItems()
myFunction()
