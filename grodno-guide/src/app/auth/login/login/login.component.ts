import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';

import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private flashMessage: FlashMessagesService
  ) {
  }

  ngOnInit() {
    this.authenticationService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['home']);
      }
    });
  }

  onSubmit() {
    this.authenticationService.login(this.email, this.password)
      .then(res => {
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['home']);
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
  }
}
