import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionAddComponent } from './direction-add.component';

describe('DirectionAddComponent', () => {
  let component: DirectionAddComponent;
  let fixture: ComponentFixture<DirectionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectionAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
