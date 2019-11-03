import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../auth-service/authentication.service';
import {UserService} from '../../auth-service/user.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Card} from '../../../models/card.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  client: Card = {
    id: '',
    title: '',
    description: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private flashMessage: FlashMessagesService,
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authenticationService.register(this.email, this.password)
      .then(res => {
        this.flashMessage.show('You are now registered and logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
    this.userService.newClient(this.client);
  }
}

