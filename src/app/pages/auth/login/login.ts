import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
   this.submitted = true;

  if (this.loginForm.valid) {
    const success = this.auth.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );

    if (success) {
      alert('Login Successful!');
      this.router.navigate(['/']);
    } else {
      alert('Invalid Credentials');
    }
  }
  }
}
