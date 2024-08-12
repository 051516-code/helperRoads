import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authFake.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-recoverpass',
  templateUrl: './recoverpass.page.html',
  styleUrls: ['./recoverpass.page.scss'],
})
export class RecoverpassPage {
  requestForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService

  ) { 
    this.requestForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]]
    })
  }

async onRequestSubmit(){
  if(this.requestForm.valid){
    const email = this.requestForm.get('email')?.value;

    try{

      const emailValid = await this.authService.recoverPassword(email);
      
      if(emailValid) {
        await this.toastService.showSuccessToast('Codigo enviado al correo electronico');
        this.router.navigate(['helperRoads/auth/verifycode'])
  
      }else {
        await this.toastService.showDangerToast('Email invalido!!');
      }
      
    }catch(error){
      await this.toastService.showDangerToast('Error al enviar el codigo a tu correo ')
    }
  }
}

}
