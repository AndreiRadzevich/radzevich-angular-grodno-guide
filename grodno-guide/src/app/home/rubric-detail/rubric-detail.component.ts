import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Detail } from '../../models/detail.interface';
import {Details} from '../../models/det.interface';

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
  filterDetails: any[];
  stop: number = 2;
  filterState: string;

  constructor(private route: ActivatedRoute, private detailService: DetailService) {}

  ngOnInit() {
    this.route.data.pipe(pluck('details'))
    .subscribe(
      detail => {
        this.filterState = detail.filters[0];
        this.details = detail;
        this.detailOpen = true;
        this.filterDetails = detail.details.filter((item) => item.image.startsWith('Restaurants'));
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
    this.filterState = filter;
    this.detailOpen = true;
    this.stop = 2;
    this.filterDetails = this.details.details.filter((item: Details) => item.image.startsWith(filter)).slice(0, this.stop);
    }

    showMore() {
    this.stop += 1;
    this.filterDetails = this.details.details.filter((item: Details) => item.image.startsWith(this.filterState)).slice(0, this.stop);
  }
  }

