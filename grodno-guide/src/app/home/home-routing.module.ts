import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RubricListComponent } from './rubric-list/rubric-list.component';
import { RubricDetailComponent } from './rubric-detail/rubric-detail.component';

import { RubricDetailResolverService } from './rubric-detail/rubric-detail.resolver.service';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: RubricListComponent,
    children: [
      {
        path: ':rubric',
        component: RubricDetailComponent,
        resolve: {
          details: RubricDetailResolverService
        }
        },
      {
        path: '',
        component: RubricDetailComponent,
        resolve: {
          details: RubricDetailResolverService
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
  ]
})
export class HomeRoutingModule { }
