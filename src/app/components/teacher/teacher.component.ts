import { Component, OnInit } from '@angular/core';
import { TeacherListDataService } from '../../services/teacher-data.service';
import { Teacher} from '../../services/teacher-data.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class teacherComponent implements OnInit {

  teachers:Teacher[];
  isToDisplayTeachers: boolean = false;

  constructor(private TeacherListDataService:TeacherListDataService) { }

  ngOnInit() {
    this.TeacherListDataService.getTeachers().subscribe ((teachers) =>{
      this.teachers = teachers;
    });
  }

}
