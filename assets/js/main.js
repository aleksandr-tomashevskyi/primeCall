'use strict'

let heroImage = document.querySelector('.hero__image');
let heroContainer = document.querySelector('.hero__container');
let heroFrame = 0;
let heroFrameModifier = 1;
let currentHeroAction = 'idle';

function heroIdleAnim(){
   heroImage.style.objectPosition = `-${heroFrame*120.3+33}px -1px`;
   heroFrame += heroFrameModifier;
   if(heroFrame == 11){
      heroFrameModifier = heroFrameModifier * -1;
   } else if(heroFrame < 1){
      heroFrameModifier = heroFrameModifier * -1;
   }
   setTimeout(()=>window.requestAnimationFrame(animFrameHandler), 150);
}

function animFrameHandler(){
   if(currentHeroAction === 'idle'){
      heroIdleAnim();
   } else{
      heroMovementAnim();
   }
}

function heroMovementAnim(){
   if(currentHeroAction === 'MR'){
      heroImage.style.objectPosition = `-${heroFrame*120.3+33}px -83px`;
      heroFrame += heroFrameModifier;
      console.log('Hero Frame: ' + heroFrame);
      console.log('Hero frame modifier: '+heroFrameModifier);
      if(heroFrame === 18){
         heroFrame = 0;
      }
   }
   setTimeout(()=>window.requestAnimationFrame(animFrameHandler), 40);
}

document.addEventListener('keydown', (event) => {
   if(event.key === 'ArrowRight'){
      currentHeroAction = 'MR'; //MR stands for Movement Right
   } else if(event.key === 'ArrowLeft'){
      currentHeroAction = 'ML'; //ML stands for Movement Left
   }
});
document.addEventListener('keyup', (event) => {
   currentHeroAction = 'idle';
   heroFrame = 0;
   heroFrameModifier = 1;
});

window.requestAnimationFrame(animFrameHandler);