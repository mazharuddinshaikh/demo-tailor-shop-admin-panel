import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';
import { User } from '../model/user';
import { DtsUserService } from '../service/dts-user.service';

@Component({
  selector: 'app-dts-signin',
  templateUrl: './dts-signin.component.html',
  styleUrls: ['./dts-signin.component.css']
})
export class DtsSigninComponent implements OnInit {
  constructor(private route: Router, private dtsUserService: DtsUserService) { }

  ngOnInit(): void {
  }
  login() {
    this.dtsUserService.login({ userName: 'mazhar', password: 'mazhar123' }).subscribe(result => {
      console.log('Logged in ' + result);
      this.route.navigate(['home'], {
      });
    }, error => {
      console.log('Error occured' + error);
    })


  }
}
