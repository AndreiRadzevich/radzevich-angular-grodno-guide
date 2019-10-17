import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { HomeService } from '../home.service';
import { Detail } from '../../models/detail.interface';

@Injectable({
  providedIn: 'root'
})
export class RubricDetailResolverService implements Resolve<Detail> {
  constructor(private homeService: HomeService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.homeService.getFolder((route.params.rubric || 'eat'), 'details');
  }
}
