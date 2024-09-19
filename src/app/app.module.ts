import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { studentcomponent } from './shared/component/student/student.component';
import { student1component } from './shared/component/student1/student1.component';
import { FormsModule } from '@angular/forms';
import { student2component } from './shared/component/student2/student2.comonent';

@NgModule({
  declarations: [
    AppComponent,
    studentcomponent,
    student1component,
    student2component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
