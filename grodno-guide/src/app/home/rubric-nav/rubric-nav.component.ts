import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';
import {Observable} from 'rxjs';
import {Rubric} from '../../models/rubric.interface';

@Component({
  selector: 'app-rubric-list',
  templateUrl: './rubric-nav.component.html',
  styleUrls: ['./rubric-nav.component.css']
})
export class RubricNavComponent implements OnInit {

  rubrics$: Observable<Rubric[]>;

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.rubrics$ = this.getRubrics('rubric');
  }

  getRubrics(endpoint: string) {
    return this.homeService.getRubrics(endpoint);
  }
}
