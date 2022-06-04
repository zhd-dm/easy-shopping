import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    userNameFormControl: new FormControl('', Validators.required),
    userEmailFormControl: new FormControl ('', Validators.email),
    userPasswordFormControl: new FormControl ('', Validators.minLength(5))
  })

  constructor() { }

  ngOnInit(): void {
  }

  logIn() {
    console.log(this.loginForm.value)
  }

}
