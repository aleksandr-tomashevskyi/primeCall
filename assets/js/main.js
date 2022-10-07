'use strict'

let heroImage = document.querySelector('.hero__image');
let heroContainer = document.querySelector('.hero__container');
let heroFrame = 0;
let heroFrameModifier = 1;

console.log(heroImage)

function heroIdleAnim(){
   heroImage.style.objectPosition = `-${heroFrame*120.1-6}px -1px`;
   console.log(heroFrameModifier)
   heroFrame += heroFrameModifier;
   if(heroFrame == 11){
      heroFrameModifier = heroFrameModifier * -1;
   } else if(heroFrame < 1){
      heroFrameModifier = heroFrameModifier * -1;
   }
   setTimeout(()=>window.requestAnimationFrame(heroIdleAnim), 100);
}

window.requestAnimationFrame(heroIdleAnim);