let menuBtn=document.querySelector(".menu-btn");
let closeBtn=document.querySelector(".close-btn");
let menuEl= document.querySelector(".menu");
let headerEl=document.querySelector("header");


menuBtn.addEventListener("click",()=>{
    menuEl.classList.add("menu-active");
})
closeBtn.addEventListener("click",()=>{
    menuEl.classList.remove("menu-active");
})

window.addEventListener("scroll",()=>{
headerEl.classList.toggle("header-active",scrollY>0)
})





const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_ei76eu7';
   const templateID = 'template_0ovetcy';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    
      btn.value = 'Send Email';
      alert('تم الارسال بنجاح!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


function openLink() {
    // حدد رابط التحميل
    const link = "https://yahalablob.blob.core.windows.net/yahalafileupload/UserFiles/Offer/Yahala Card.apk";
  
    // افتح الرابط في نافذة جديدة
    window.open(link, "_blank");
  }
  

