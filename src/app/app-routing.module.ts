import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login',component: LoginComponent },
  { path: 'student',component: StudentComponent},
  { path: 'teacher', component: TeacherComponent },
  { path: 'edit', component: EditProfileComponent },
  { path: 'create', component: ProfileComponent },
  { path: '**', component: UserNotFoundComponent },















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
