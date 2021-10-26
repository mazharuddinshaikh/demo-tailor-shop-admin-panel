import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { DtsUserService } from '../service/dts-user.service';

@Component({
  selector: 'app-dts-signin',
  templateUrl: './dts-signin.component.html',
  styleUrls: ['./dts-signin.component.css']
})
export class DtsSigninComponent implements OnInit {
  constructor(private route: Router, private dtsUserService: DtsUserService) { }
  public user: User = null;

  ngOnInit(): void {
  }
  login() {
    this.dtsUserService.login({ userName: 'mazhar', password: 'mazhar123' })
    
    .subscribe((result: HttpResponse<User>) => {
      console.log('Http Reposne status' + result.status);
      this.user = result.body;
      
      localStorage.setItem("user", JSON.stringify(this.user));
      console.log('Logged in user form signin' + JSON.stringify(this.user));
      this.route.navigate(['home'], {
      });
    }, error => {
      console.log('Error occured' + error);
    }, () => {
      console.log('Login request completed');
    });


  }
}
