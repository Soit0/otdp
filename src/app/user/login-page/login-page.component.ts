import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  loading = false;
  serverMessage: string;


  constructor(public angularFireAuth: AngularFireAuth, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  get email(): AbstractControl {
    return this.form.get('email') as AbstractControl;
  }

  get password(): AbstractControl {
    return this.form.get('password') as AbstractControl;
  }

  async onSubmit(): Promise<void> {
    this.loading = true;

    const email = this.email.value;
    const password = this.password.value;

    try {
      await this.angularFireAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      this.serverMessage = err;
    }

    this.loading = false;
  }
}
