import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectThemeAddComponent } from './subject-theme-add.component';

describe('SubjectThemeAddComponent', () => {
  let component: SubjectThemeAddComponent;
  let fixture: ComponentFixture<SubjectThemeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectThemeAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectThemeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
