import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { delay } from 'rxjs';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  
})

export class PrincipalPage {


  constructor( private toastController: ToastController, private db:AngularFireDatabase ) {
    
  }
  
  alarma: boolean = false;

  
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  //PERMITE CAMBIAR EL VALOR DE ALARMA SI ES FALSO PASA A VERDADERO O VICEVERSA CON !
  actualizarBoton(){
    this.db.object("alarma").set(!this.alarma);
  }

  //LEE LA VARIABLA YA DECLARABLE ALARMA
  ngOnInit(){
  this.db.object("alarma").valueChanges().subscribe((alarma:any)=>{
    
    console.log(alarma);
    this.alarma = alarma;
    
  })
  }
  
  //import { CallNumber } from '@ionic-native/call-number';
 
  //constructor(private callNumber: CallNumber){}
   
  //callNumber(phoneNumber: number ){
    //  this.callNumber.callNumber(phoneNumber, true)
      //.then(() => console.log('Llamada exitosa!'))
     // .catch(() => console.log('Error al intentar llamar'));
   
  //}

}

