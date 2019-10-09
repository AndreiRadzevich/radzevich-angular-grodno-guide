import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFolderComponent } from './main-folder.component';

describe('MainFolderComponent', () => {
  let component: MainFolderComponent;
  let fixture: ComponentFixture<MainFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
