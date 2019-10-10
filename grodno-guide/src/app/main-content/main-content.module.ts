import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainFolderResolve } from './containers/main-folder/main-folder.resolve';
import { MainContentResolve } from './components/main-container/main-container.resolve';

import { MainContentService } from './main-content.service';
import { MainAppComponent } from './components/main-app/main-app.component';
import { MainFolderComponent } from './containers/main-folder/main-folder.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ContentItemComponent } from './components/content-item/content-item.component';

export const ROUTES: Routes = [
  {
    path: 'folder/:name',
    component: MainFolderComponent,
    resolve: {
      rubric: MainFolderResolve
    }
  },
  {
    path: 'rubric/:category',
    component: MainContainerComponent,
    outlet: 'pane',
    resolve: {
      category: MainContentResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MainAppComponent,
    MainFolderComponent,
    FilterItemComponent,
    MainContainerComponent,
    ContentItemComponent
  ],
  providers: [
    MainContentService,
    MainFolderResolve,
    MainContentResolve
  ],
  exports: [
    MainAppComponent
  ]
})
export class MainContentModule { }
