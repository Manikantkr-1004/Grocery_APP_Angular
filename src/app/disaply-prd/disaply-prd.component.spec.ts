import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisaplyPrdComponent } from './disaply-prd.component';

describe('DisaplyPrdComponent', () => {
  let component: DisaplyPrdComponent;
  let fixture: ComponentFixture<DisaplyPrdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisaplyPrdComponent]
    });
    fixture = TestBed.createComponent(DisaplyPrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
