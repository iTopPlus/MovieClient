import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPoppularComponent } from './get-poppular.component';

describe('GetPoppularComponent', () => {
  let component: GetPoppularComponent;
  let fixture: ComponentFixture<GetPoppularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPoppularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPoppularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
