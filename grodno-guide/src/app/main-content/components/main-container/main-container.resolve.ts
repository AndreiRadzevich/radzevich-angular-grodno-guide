import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { MainContentService } from '../../main-content.service';
import { Content } from '../../models/content.interface';

@Injectable()
export class MainContainerResolve implements Resolve<Content> {
  constructor(private mainContentService: MainContentService) {}
  resolve(route: ActivatedRouteSnapshot) {

    return this.mainContentService.getMessage(route.params.id);
  }
}
