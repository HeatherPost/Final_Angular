import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { teacherComponent } from './teacher.component';

describe('teacherComponent', () => {

  let fixture: ComponentFixture<teacherComponent>;
  let component: teacherComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ teacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(teacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
