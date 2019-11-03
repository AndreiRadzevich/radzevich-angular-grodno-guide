import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RubricNavComponent} from './rubric-nav/rubric-nav.component';
import {RubricContainerComponent} from './rubric-container/rubric-container.component';

import {RubricContainerResolverService} from './rubric-container/rubric-container.resolver.service';

import {LoginGuard} from '../auth/guard/login.guard';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: RubricNavComponent,
    children: [
      {
        path: ':rubric',
        component: RubricContainerComponent, canActivate: [LoginGuard],
        resolve: {
          details: RubricContainerResolverService
        }
      },
      {
        path: '',
        component: RubricContainerComponent,
        resolve: {
          details: RubricContainerResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoginGuard
  ]
})
export class HomeRoutingModule {
}
