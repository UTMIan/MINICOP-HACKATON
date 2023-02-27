import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  
})

export class PrincipalPage {
  
  constructor() {}
  
  startAnimation() {
    console.log("Something");
    
  }

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

}
