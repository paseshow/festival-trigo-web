import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.validUserLogged();
    this.buildForm();
  }

  //------------------------
  // Inicializamos formulario
  //------------------------
  buildForm(): void {
    this.formLogin = this.fb.group({
      nameUser: ['', Validators.required],
      passwordUser: ['', Validators.required]
    });
  };


  //-----------------------------------------
  // Logueamos el usuario a configurar eventos 
  //------------------------------------------
  loggedUser(): void {

  };

  //---------------------------------------
  // Validamos si hay algun usuario logeado
  //---------------------------------------
  validUserLogged(): void {
    if (localStorage.getItem('token') && localStorage.getItem('idUser')) {
      this.route.navigate(['/configuracionEvento/admin']);
    }
  };

}
