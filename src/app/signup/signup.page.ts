import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class SignupPage implements OnInit {


  //INICIALIZA UN OBJETO CON DATOS
  usuario={ 
  nombreUser:"",
  edadUser:"",
  telefonoUser: "",
  userPass:""
};
 
  constructor(private db:AngularFireDatabase) {
    this.db.object("usuario").set("");


   }

   registrarUsuario(){
    this.db.list("usuario").push(this.usuario)


    this.db.object("usuario").valueChanges().subscribe(data=>{
      console.log(data);
      });
   }
   

  ngOnInit() {
  }

}
