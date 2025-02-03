import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPlayersComponent } from './management-players.component';

describe('ManagementPlayersComponent', () => {
  let component: ManagementPlayersComponent;
  let fixture: ComponentFixture<ManagementPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementPlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
