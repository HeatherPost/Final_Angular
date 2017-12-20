import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { teacherComponent } from './components/teacher/teacher.component';
//import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    teacherComponent,
    //AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
