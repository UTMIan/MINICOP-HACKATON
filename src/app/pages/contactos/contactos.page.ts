import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage{

  contactos = [
    {nombrecompleto:"", telefono:"", edad:""}, 
    {nombrecompleto:"", telefono:"", edad:""}, 
    {nombrecompleto:"", telefono:"", edad:""},
    {nombrecompleto:"", telefono:"", edad:""}
  ];

  constructor(private toastController : ToastController, private db:AngularFireDatabase) { 
  }
    //FUNCIONES REGISTRAR CONTACTOS FIREBASE

    registrarContacto(index:number){
      this.db.object(`contacto${index+1}`).set(this.contactos[index])
    }
  
    ngOnInit(){

         //DETECTAR CAMBIOS DE VARIABLE 
      for (const [i, v]  of this.contactos.entries()) {
      this.db.object(`contacto${i+1}`).valueChanges().subscribe((contacto: any)=>{
        if(!!contacto){
          this.contactos[i]=contacto;
        }
        });
      }
    }
  
   async presentToast(position: 'bottom') {
     const toast = await this.toastController.create({
       message: 'Mensajes guardados',
       duration: 2000,
       position: position,
  });

  await toast.present();
   }
  

  async presentAlertC2() {

  }

  async presentAlertC3() {

  }

}
