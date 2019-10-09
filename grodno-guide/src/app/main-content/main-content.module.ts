import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainFolderResolve } from './containers/main-folder/main-folder.resolve';
import { MainContainerResolve } from './components/main-container/main-container.resolve';
import { MainContentService } from './main-content.service';
import { MainAppComponent } from './components/main-app/main-app.component';
import { MainFolderComponent } from './containers/main-folder/main-folder.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

export const ROUTES: Routes = [
  {
    path: 'folder/:name',
    component: MainFolderComponent,
    resolve: {
      messages: MainFolderResolve
    }
  },
  {
    path: 'message/:id',
    component: MainContainerComponent,
    outlet: 'pane',
    resolve: {
      message: MainContainerResolve
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
    MainContainerComponent
  ],
  providers: [
    MainContentService,
    MainFolderResolve,
    MainContainerResolve
  ],
  exports: [
    MainAppComponent
  ]
})
export class MainContentModule { }
