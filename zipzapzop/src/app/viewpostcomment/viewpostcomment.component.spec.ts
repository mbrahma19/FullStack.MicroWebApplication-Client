import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpostcommentComponent } from './viewpostcomment.component';

describe('ViewpostcommentComponent', () => {
  let component: ViewpostcommentComponent;
  let fixture: ComponentFixture<ViewpostcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpostcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpostcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
