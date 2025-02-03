import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcheComponent } from './matche.component';

describe('MatcheComponent', () => {
  let component: MatcheComponent;
  let fixture: ComponentFixture<MatcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatcheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
