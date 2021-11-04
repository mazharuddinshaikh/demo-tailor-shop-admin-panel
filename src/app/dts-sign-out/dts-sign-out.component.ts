import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dts-sign-out',
  templateUrl: './dts-sign-out.component.html',
  styleUrls: ['./dts-sign-out.component.css']
})
export class DtsSignOutComponent implements OnInit {
  public signoutForm = new FormGroup({
  });

  constructor(private route: Router) {
    console.log('Signout component loaded');
   }

  ngOnInit(): void {
  }

  signout(){
    console.log('Signout application clearing user details from storage');
    localStorage.clear();
    this.route.navigate(['signin'], {
    });
  }

}
