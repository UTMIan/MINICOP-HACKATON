import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) { }
  
  async presentAlerts() {
    const alert = await this.alertController.create({
      header: 'Contactos registrados con exito!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Contactos no registrados';
          },
        },
        {
          text: 'OK',
          role: 'Exitoso',
          handler: () => {
            this.handlerMessage = 'Contactos registrados';
          },
        },
      ],
    });

    await alert.present();

  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Inserta la informacion de tu contacto',
      buttons: ['OK'],
      inputs: [
        {
          
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Apellido',
          attributes: {
            maxlength: 16,
          },
          
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
      ],
    });

    await alert.present();
  }

  
  ngOnInit() {
  }

}
