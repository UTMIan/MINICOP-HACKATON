import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  
})

export class PrincipalPage {

  constructor(private animationCtrl: AnimationController) {}
  

  // private alertController: AlertController
  // async panic() {
  //   const alert = await this.alertController.create({
  //     header: 'Panic!',
  //     message: 'Are you sure you want to trigger the panic alarm?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //       }, {
  //         text: 'Yes',
  //         handler: () => {
  //           console.log('Panic triggered');
  //           // Add your panic code here
  //         }
  //       }
  //     ]
  //   });

  // await alert.present();

  startAnimation() {
      const buttonElement = document.querySelector('.panic-button');
      if (buttonElement !== null) {
        const animation = this.animationCtrl.create()
          .addElement(buttonElement)
          .duration(1000)
          .iterations(Infinity)
          .keyframes([
            { offset: 0, transform: 'scale(1)', opacity: '1' },
            { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
            { offset: 1, transform: 'scale(1)', opacity: '1' }
      ]);

    animation.play();
    }
  }
}
