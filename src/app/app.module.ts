import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { teacherComponent } from './components/teacher/teacher.component';
import {TeacherListDataService} from './services/teacher-data.service'
//import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  {path: '', component: teacherComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    teacherComponent,
    //AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TeacherListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
