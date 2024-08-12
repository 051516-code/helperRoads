import { Component } from '@angular/core';
import { AuthService } from '../services/authFake.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';
import { Register } from '../interfaces/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  registerForm: FormGroup;

  constructor(
    private router:Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastService: ToastService

  ) {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.registerForm.valid) {
      const register : Register = this.registerForm.value;

      this.authService.register(register).then(
        (response) => {
          if(response ) {
            this.toastService.showSuccessToast('Registro completado con suceso !!!')
            this.router.navigate(['helperRoads/auth/login']);
          }else {

            this.toastService.showDangerToast('Error al registrar usuario , Existente')
          }
        },
        (error) => {
          console.error('Error al registrar usuario', error);
          // Aquí podrías mostrar un mensaje de error en la interfaz de usuario
        }
      );
    }
  }

  goToLogin(){
    this.router.navigate(['helperRoads/auth/login'])
  }

}
