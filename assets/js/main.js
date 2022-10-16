'use strict'

let heroImage = document.querySelector('.hero__image');
let heroContainer = document.querySelector('.hero__container');
let heroFrame = 0;
let heroFrameModifier = 1;
let currentHeroAction = 'idle';

class Hero{
   constructor(image, container, frame, frameModifier, currentAction, footPrintContainer, footPrintPosX, footPrintPosY, footPrintWidth, footPrintHeight){
      this.image = image;
      this.container = container;
      this.frame = frame;
      this.frameModifier = frameModifier;
      this.currentAction = currentAction;
      this.footPrintContainer = footPrintContainer;
      this.footPrintPosX = footPrintPosX;
      this.footPrintPosY = footPrintPosY;
      this.footPrintWidth = footPrintWidth;
      this.footPrintHeight = footPrintHeight;
   }

   idleAnim(){
      this.image.style.objectPosition = `-${this.frame*120.3+33}px -1px`;
      this.frame += this.frameModifier;
      if(this.frame == 11){
         this.frameModifier = this.frameModifier * -1;
      } else if(this.frame < 1){
         this.frameModifier = this.frameModifier * -1;
      }
      setTimeout(()=>window.requestAnimationFrame(animFrameHandler), 150);
   }

   moveAnim(){
      if(this.currentAction === 'MR'){
         this.image.style.objectPosition = `-${this.frame*120.3+33}px -83px`;
         this.frame += this.frameModifier;
         if(this.frame === 18){
            this.frame = 0;
         }
      }
      setTimeout(()=>window.requestAnimationFrame(animFrameHandler), 40);
   }
}

let heroInstance = new Hero(document.querySelector('.hero__image'), document.querySelector('.hero__container'), 0, 1, 'idle', null, null, null, null);


function animFrameHandler(){
   if(heroInstance.currentAction === 'idle'){
      heroInstance.idleAnim();
   } else{
      heroInstance.moveAnim();
   }
}


document.addEventListener('keydown', (event) => {
   if(event.key === 'ArrowRight'){
      heroInstance.currentAction = 'MR'; //MR stands for Movement Right
   } else if(event.key === 'ArrowLeft'){
      heroInstance.currentAction = 'ML'; //ML stands for Movement Left
   }
});
document.addEventListener('keyup', (event) => {
   heroInstance.currentAction = 'idle';
   heroInstance.frame = 0;
   heroInstance.frameModifier = 1;
});

window.requestAnimationFrame(animFrameHandler);