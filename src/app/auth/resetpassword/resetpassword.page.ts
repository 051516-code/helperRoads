import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authFake.service'; // Asegúrate de ajustar la ruta
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage {
  resetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService : ToastService
  ) {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
  
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true }; // Devolvemos un objeto con un error claro
    }
    return null; // Las contraseñas coinciden
  }

  async onResetSubmit() {
    if (this.resetForm.valid) {
      const password = this.resetForm.get('password')?.value;
      const code = this.getCodeFromUrl(); // Implementar función para obtener código del URL

      try {
        await this.authService.ressetPassword(code, password);
        await this.toastService.showSuccessToast('Contraseña restablecida exitosamente.');
        this.router.navigate(['helperRoads/auth/login']);
      } catch (error) {
        await this.toastService.showDangerToast('Error al restablecer la contraseña.');
      }
    }
  }

  getCodeFromUrl(): string {
    // Supongamos que el código de verificación está en un parámetro de consulta en la URL
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code') || ''; // Devuelve el valor del parámetro 'code', o una cadena vacía si no existe
  }
  


}
