import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import { MainContentService } from '../../main-content.service';
import { Content } from '../../models/content.interface';

@Injectable()
export class MainContentResolve implements Resolve<Content[]> {
  constructor(private mainContentService: MainContentService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.mainContentService.getFolder(route.params.category, 'category');
  }
}

