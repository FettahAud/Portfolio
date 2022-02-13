const menu = document.querySelector('.menu');

let toggle = false
// CustomEase.create("custom", "M0,0 C0,0 0.052,0.862 0.476,0.934 0.563,0.948 1,1 1,1 ");
// CustomEase.create("test", "M0,0 C0,0 0.021,0.609 0.328,0.732 0.404,0.762 0.536,0.299 0.56,0.464 0.585,0.641 0.805,0.868 0.864,0.878 0.951,0.892 1,1 1,1 ");
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
