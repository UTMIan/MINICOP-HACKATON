import { Component, OnInit } from '@angular/core';
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
  
  async presentAlert() {
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

  ngOnInit() {
  }

}
