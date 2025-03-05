import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduTypeAddComponent } from './edu-type-add.component';

describe('EduTypeAddComponent', () => {
  let component: EduTypeAddComponent;
  let fixture: ComponentFixture<EduTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduTypeAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
