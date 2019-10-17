import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Detail } from '../../models/detail.interface';

import { pluck } from 'rxjs/operators';
import {DetailService} from './detail.service';

@Component({
  selector: 'app-rubric-detail',
  templateUrl: './rubric-detail.component.html',
  styleUrls: ['./rubric-detail.component.css']
})
export class RubricDetailComponent implements OnInit  {
  details: Detail;
  detailOpen: boolean = true;
  selectedItem: any = '';
  filterDetails: [];
  constructor(private route: ActivatedRoute, private detailService: DetailService) {}

  ngOnInit() {
    this.route.data.pipe(pluck('details'))
    .subscribe(
      detail => {
        this.details = detail;
        this.filterDetails = detail.details.filter((item) => item.image.startsWith('pass'));
      }
    );
  }

  getStore(item) {
    if (this.selectedItem === item) {
      this.selectedItem = '';
      this.detailOpen = true;
    } else {
      this.selectedItem = item;
      this.detailOpen = false;
    }
  }
    getFilter(filter) {
      this.route.data.pipe(pluck('details'))
        .subscribe(
          detail => {
            this.details = detail;
            this.filterDetails = detail.details.filter((item) => item.image.startsWith(filter));
          }
        );
    }
  }

