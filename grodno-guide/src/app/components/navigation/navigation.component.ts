import { Component, OnInit } from '@angular/core';
import { configuration } from '../../configuration';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  menu: any;
  database = 'menu';
  filterOpen: boolean;
  currentItem: any;

  constructor( private config: ConfigService) { }

  ngOnInit() {
    this.filterOpen = false;
    this.getMenu();
  }

  toggleFilter(itemMenu: any) {
    this.filterOpen = true;
    this.currentItem = itemMenu.filters;
    console.log(this.currentItem);
  }

  getMenu() {
    this.config.getSettings(this.database).subscribe(

      setting => {
        this.menu = setting;
        console.log(setting);
      }
    );
  }
}
