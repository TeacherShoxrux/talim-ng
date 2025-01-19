import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectThemesComponent } from './subject-themes.component';

describe('SubjectThemesComponent', () => {
  let component: SubjectThemesComponent;
  let fixture: ComponentFixture<SubjectThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectThemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
