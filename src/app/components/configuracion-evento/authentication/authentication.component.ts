import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { Login } from 'src/app/models/login';
import { CommonService } from 'src/app/services/common.service';
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
    private commonService: CommonService,
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
    let login = new Login();

    login.nameUser = this.formLogin.get("nameUser").value;
    login.password = this.formLogin.get("passwordUser").value;

    this.loginService.authentication(login).subscribe(
      (resp: any) => {
        if (resp.token != null) {
          localStorage.setItem("token", resp.token);
          this.commonService.setSesion('Cerrar');
          this.validUserLogged();
        }
      }, error => {

      }
    );
  };

  //---------------------------------------
  // Validamos si hay algun usuario logeado
  //---------------------------------------
  validUserLogged(): void {
    if (localStorage.getItem('token')) {
      this.route.navigate(['/configuracionEvento/admin']);
    }
  };

}
