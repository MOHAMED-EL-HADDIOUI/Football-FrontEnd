import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementMatchesComponent } from './management-matches.component';

describe('ManagementMatchesComponent', () => {
  let component: ManagementMatchesComponent;
  let fixture: ComponentFixture<ManagementMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementMatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
