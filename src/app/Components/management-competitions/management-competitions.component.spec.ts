import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCompetitionsComponent } from './management-competitions.component';

describe('ManagementCompetitionsComponent', () => {
  let component: ManagementCompetitionsComponent;
  let fixture: ComponentFixture<ManagementCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementCompetitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
