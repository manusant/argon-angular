import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessFooterComponent } from './access-footer.component';

describe('AccessFooterComponent', () => {
  let component: AccessFooterComponent;
  let fixture: ComponentFixture<AccessFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
