import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementClubsComponent } from './management-clubs.component';

describe('ManagementClubsComponent', () => {
  let component: ManagementClubsComponent;
  let fixture: ComponentFixture<ManagementClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementClubsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
