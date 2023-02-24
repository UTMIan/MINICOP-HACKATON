import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage{
  mensaje1 = '';
  mensaje2 = '';
  mensaje3 = '';

  constructor(private toastController: ToastController) {
   
  }
  
  registrarMensajes(forma: NgForm) {
    console.log(forma.value)
    this.mensaje1 = forma.value.mensaje1;
    this.mensaje2 = forma.value.mensaje2;
    this.mensaje3 = forma.value.mensaje3;
   
  }

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Mensajes guardados',
      duration: 2000,
      position: position,
      
    });

    await toast.present();
  }

}
