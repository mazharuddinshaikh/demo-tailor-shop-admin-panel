import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { DtsUserService } from '../service/dts-user.service';

@Component({
  selector: 'app-dts-signin',
  templateUrl: './dts-signin.component.html',
  styleUrls: ['./dts-signin.component.css']
})
export class DtsSigninComponent implements OnInit {
  // public user: User = null;
  public signinForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });

  public validationError: string[] = [];

  constructor(private route: Router, private dtsUserService: DtsUserService) {
    let user: User = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      // redirect to home page
      this.redirectToHome();
    }
  }


  ngOnInit(): void {
  }
  // valid username password
  // { userName: 'mazhar', password: 'mazhar123' }

  login() {
    let user: User = null;
    // remove existing validation error from array
    this.validationError = [];
    // get the value of username and password
    let userNameField = this.signinForm.get('userName');
    let passwordField = this.signinForm.get('password');

    //  validate credentials
    console.log('Signin form status' + this.signinForm.status)
    if (!userNameField.valid) {
      if (userNameField.hasError('required')) {
        this.validationError.push('Enter valid user name');
      }
    }
    if (!passwordField.valid) {
      if (passwordField.hasError('required')) {
        this.validationError.push('Enter valid password');
      }
    }

    //  call login service if form valid
    if (this.signinForm.valid) {
      let txtUserName = userNameField.value;
      let txtPassword = passwordField.value;
      this.dtsUserService.login({ userName: txtUserName, password: txtPassword })

        .subscribe((result: HttpResponse<User>) => {
          console.log('User logged in successfully user ' + txtUserName);
          user = result.body;
          localStorage.setItem("user", JSON.stringify(user));
          this.redirectToHome();
        }, error => {
          console.log('Status ' + error.error.status);
          console.log('Error occured ' + error.error.message);
          this.validationError.push(error.error.message);
        }, () => {
          console.log('Login request completed');
        });
    }
   


  }
  redirectToHome() {
    this.route.navigate(['home'], {
    });
  }
}
