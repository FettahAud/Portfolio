// Mobile navigation
const menu = document.querySelector('.menu');
let toggle = false
const tl = gsap.timeline({ duration: 0.5, ease: Expo.inOut });
menu.addEventListener('click', () => {
   if (tl.isActive()) return;
   toggle = !toggle
   menu.classList.toggle('active')
   if (toggle) {
      tl
         .to('html', {
            "--lineWidth": "0",
         })
         .to('.lines', {
            width: 0
         }, '-=0.5')
         .to('html', {
            "--top": "0vh",
            ease: "test",
            duration: 0.4,
         }, '+=0.1')
         .to('html', {
            "--clip": "circle(110% at 50% 20%)",
         }, '-=0.2')
         .to('html', {
            "--rotateTop": "rotate(40deg)",
            "--rotateBottom": "rotate(-40deg)",
         }, '-=0.4')
         .to('.lines', {
            width: 0
         })
         .to('html', {
            "--lineWidth": '1.7rem'
         })
   } else {
      tl
         .to('html', {
            "--lineWidth": "0",
         })
         .to('html', {
            "--rotateTop": "rotate(0deg)",
            "--rotateBottom": "rotate(0deg)",
         })
         .to('html', {
            "--clip": "circle(70% at 50% 20%)",
         })
         .to('html', {
            "--top": "-100vh"
         })
         .to('.lines', {
            width: '1.7rem'
         })
         .to('html', {
            "--lineWidth": '1.7rem'
         }, '-=0.5')
   }
});
