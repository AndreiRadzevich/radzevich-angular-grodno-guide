import {Component, OnInit, ElementRef, ContentChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Detail } from '../../models/detail.interface';
import {Details} from '../../models/det.interface';

import { pluck } from 'rxjs/operators';
import {AuthenticationService} from '../../auth/authentication.service';
import {UserService} from '../../auth/user.service';
import {Card} from '../../models/card.interface';


@Component({
  selector: 'app-rubric-detail',
  templateUrl: './rubric-detail.component.html',
  styleUrls: ['./rubric-detail.component.css']
})
export class RubricDetailComponent implements OnInit  {
  details: Detail;
  detailOpen = true;
  selectedItem: any = '';
  filterDetails: any[];
  filterDetailsStore: any[];
  currentAuth: any;
  store: any;
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.route.data.pipe(pluck('details'))
    .subscribe(
      detail => {
        this.details = detail;
        this.detailOpen = true;
        this.filterDetails = detail.details.filter((item) => item.image.startsWith(detail.filters[0]));
        this.filterDetailsStore = this.filterDetails;
      }
    );
    // this.authenticationService.getIdToken().subscribe(id => {
    //   this.currentAuth = id;
    //   console.log(this.currentAuth);
    // });
    this.userService.getClient(this.currentAuth).subscribe(client => {
        this.store = client;
      console.log(this.store);
    });
  }

  getStore(item, el: HTMLElement) {

    if (this.selectedItem === item) {
      this.selectedItem = '';
      this.detailOpen = true;
    } else {

      this.selectedItem = item;
      console.log(this.store.title);
      this.store.title = this.selectedItem.title ;
      this.store.description = this.selectedItem.description;
      this.userService.updateClient(this.store);
      this.detailOpen = false;
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
      }, 300);
    }
    }

  getFilter(filter) {
    this.detailOpen = true;
    this.filterDetails = this.details.details.filter((item: Details) => item.image.startsWith(filter));
  }

  showMore() {
    this.detailOpen = true;
    this.filterDetails = [...this.filterDetails, ...this.filterDetailsStore ];
  }
}

