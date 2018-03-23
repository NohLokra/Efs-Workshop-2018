import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalInformationsComponent } from './personnal-informations.component';

describe('PersonnalInformationsComponent', () => {
  let component: PersonnalInformationsComponent;
  let fixture: ComponentFixture<PersonnalInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnalInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
