import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {
  // Typically referenced to your ion-router-outlet
  presentingElement = null;
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ubicacion compartida con exito!',
      buttons: [
        {
          text: 'OK',
          role: 'Exitoso',
        },
      ],
    });

    await alert.present();

  }

}
