
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        contactForm.reset();
    });
});

function myFunction(x) {
    x.classList.toggle("change");
  }
  var x = 0;
var menu =document.getElementById("buttonarea");
var display = 0;
function showHide()
{
   if(display ==1){
    display =0;
    menu.style.display= "none";
   }
   else{
    display =1;
    menu.style.display ="block";
   }
}
