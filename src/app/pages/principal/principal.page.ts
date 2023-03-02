import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  
})

export class PrincipalPage {
  


  constructor( private toastController: ToastController, private db:AngularFireDatabase ) {}
  
  alarma: boolean = false;

  
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
  
  startAnimation() {
  //   console.log("Something");
  //   const buttonElement = document.querySelector('.panic-button');
  //   if (buttonElement !== null) {
  //     const animation = this.animationCtrl.create()
  //       .addElement(buttonElement)
  //       .duration(1000)
  //       .iterations(Infinity)
  //       .keyframes([
  //         { offset: 0, transform: 'scale(1)', opacity: '1' },
  //         { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
  //         { offset: 1, transform: 'scale(1)', opacity: '1' }
  //   ]);

  // animation.play();
  // }
  }

  //PERMITE CAMBIAR EL VALOR DE ALARMA SI ES FALSO PASA A VERDADERO O VICEVERSA CON !
  actualizarBoton(){
    this.db.object("alarma").set(!this.alarma);
  }

  emergenciaLlamada(){
    
  }

  //LEE LA VARIABLA YA DECLARABLE ALARMA
  ngOnInit(){
  this.db.object("alarma").valueChanges().subscribe((alarma:any)=>{
    console.log(alarma);
    this.alarma = alarma;
    
  })
  }


}

