import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Content } from '../../models/content.interface';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent  implements OnInit {

  details: [] ;

  constructor(private route: ActivatedRoute) {
    // console.log('bbbla', this.route);
    // console.log('rrrrrr', this.details);
  }

  ngOnInit() {
    this.route.data.pipe(pluck('category')).subscribe(category => this.details = category.details);
  }
}
