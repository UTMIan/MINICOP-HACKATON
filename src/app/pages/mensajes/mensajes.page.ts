import { Component, OnInit } from '@angular/core';
import { AngularFireAction, AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage{
mensaje1 = "Ayuda";
mensaje2 = "Pide ayuda";
mensaje3 = "Estoy en...";

  constructor(private toastController: ToastController, private db:AngularFireDatabase) {
   this.db.object("mensaje1").set("");
   this.db.object("mensaje2").set("");
   this.db.object("mensaje3").set("");
  }
  
  registrarMensajes() {
    this.db.list("mensaje1").push(this.mensaje1);
    this.db.list("mensaje2").push(this.mensaje2);
    this.db.list("mensaje3").push(this.mensaje3);
    

    this.db.object("mensaje1").valueChanges().subscribe(data=>{
      console.log(data);
      });
    this.db.object("mensaje2").valueChanges().subscribe(data=>{
      console.log(data);
      });
    this.db.object("mensaje3").valueChanges().subscribe(data=>{
      console.log(data);
      });
}

  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Mensajes enviadonexito',
      duration: 2000,
      position: position,
      
    });

    await toast.present();
  }

}
