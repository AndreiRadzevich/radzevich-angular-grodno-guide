import {Component, OnInit, ElementRef, ContentChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Detail } from '../../models/detail.interface';
import {Details} from '../../models/det.interface';

import { pluck } from 'rxjs/operators';
import {CardService} from '../card.service';


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

  constructor(private route: ActivatedRoute, private cardService: CardService) {}

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
    }

  getStore(item, el: HTMLElement) {
    if (this.selectedItem === item) {
      this.selectedItem = '';
      this.detailOpen = true;
    } else {
      this.selectedItem = item;
      this.cardService.createCard(this.selectedItem);
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

