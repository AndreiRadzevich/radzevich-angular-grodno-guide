import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { HomeService } from '../home.service';
import { Details } from '../../models/detail.interface';

@Injectable({
  providedIn: 'root'
})
export class RubricContainerResolverService implements Resolve<Details> {
  constructor(private homeService: HomeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.homeService.getFolder((route.params.rubric || 'eat'), 'details');
  }
}
