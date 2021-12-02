import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { ParentcComponent } from './DataSharing/parentc/parentc.component';
import { ChildCComponent } from './DataSharing/parentc/child-c/child-c.component';
import { FirstoneComponent } from './DataSharing/firstone/firstone.component';
import { SecondoneComponent } from './DataSharing/secondone/secondone.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FacultyComponent,
    HomeComponent,
    ErrorComponent,
    ContactComponent,
    ParentcComponent,
    ChildCComponent,
    FirstoneComponent,
    SecondoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
