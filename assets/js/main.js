'use strict'

class Hero{
   constructor(image, container, frame, frameModifier, currentAction, currentDirection, revereseStartPos, footPrintContainer, footPrintPosX, footPrintPosY, footPrintWidth, footPrintHeight){
      this.image = image;
      this.container = container;
      this.frame = frame;
      this.frameModifier = frameModifier;
      this.currentAction = currentAction;
      this.currentDirection = currentDirection;
      this.revereseStartPos = revereseStartPos;
      this.footPrintContainer = footPrintContainer;
      this.footPrintPosX = footPrintPosX;
      this.footPrintPosY = footPrintPosY;
      this.footPrintWidth = footPrintWidth;
      this.footPrintHeight = footPrintHeight;
   }

   idleAnim(){
      if(this.currentDirection === 'L'){
         this.image.style.objectPosition = `${this.revereseStartPos - (this.frame ? this.frame*120.3 : 0) }px -1px`;
         this.frame += this.frameModifier;
      } else{
         this.image.style.objectPosition = `-${this.frame*120.3+33}px -1px`;
         this.frame += this.frameModifier;
      }
      if(this.frame === 12){
         this.frame = 0;
      }
      setTimeout(()=>window.requestAnimationFrame(animFrameHandler), 120);
   }

   chooseDirection(){
      if(this.currentAction === 'MR' && this.currentDirection != 'R'){
         this.image.style.transform = 'scaleX(1)';
         this.frame = 0;
         this.frameModifier = 1;
         this.currentDirection = 'R';
      } else if(this.currentAction === 'ML' && this.currentDirection != 'L'){
         this.image.style.transform = 'scaleX(-1)';
         this.frame = 18;
         this.frameModifier = -1;
         this.currentDirection = 'L';
      }
   }

   moveAnim(){
      this.chooseDirection();
      if(this.currentAction === 'MR'){
         this.image.style.objectPosition = `-${this.frame*120.3+33}px -83px`;
         this.frame += this.frameModifier;
         if(this.frame === 18){
            this.frame = 0;
         }
      } else if(this.currentAction === 'ML'){
         this.image.style.objectPosition = `-${this.frame*120.3+33}px -83px`;
         this.frame -= this.frameModifier;
         if(this.frame === 0){
            this.frame = 18;
         }
      }
      setTimeout(()=>window.requestAnimationFrame(animFrameHandler), 40);
   }
}

let heroInstance = new Hero(document.querySelector('.hero__image'), document.querySelector('.hero__container'), 0, 1, 'idle', 'R', 2050, null, null, null, null);


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