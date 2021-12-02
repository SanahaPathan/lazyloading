import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ContactComponent } from './contact/contact.component';
import { StudentComponent } from './student/student.component';
import { ErrorComponent } from './error/error.component';
import { AuthenGuard } from './authen.guard';
import { ParentcComponent } from './DataSharing/parentc/parentc.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'faculty/:id/:name/:age',component:FacultyComponent,canActivate:[AuthenGuard]},
  {path:'contact',component:ContactComponent},
  {path:'home',redirectTo:''},
  {path:'student',component:StudentComponent},
  {path:'parent',component:ParentcComponent},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
console.error();
