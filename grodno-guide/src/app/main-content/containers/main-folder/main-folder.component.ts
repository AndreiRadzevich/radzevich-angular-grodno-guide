import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Content } from '../../models/content.interface';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-main-folder',
  templateUrl: './main-folder.component.html',
  styleUrls: ['./main-folder.component.css']
})
export class MainFolderComponent {
  rubrics: Observable<Content[]> = this.route.data.pipe(pluck('rubric'));

  // title: Observable<string> = this.route.params.pipe(pluck('name'));
  constructor(private route: ActivatedRoute) {
    console.log('ghgh', route);
  }
}
