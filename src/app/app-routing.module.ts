import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { UserNotFoundComponent } from './user-not-found/user-not-found.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { TeacherComponent } from './teacher/teacher.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'edit', component: EditProfileComponent },
  { path: 'create', component: ProfileComponent },
  { path: 'student/:userId', component:  StudentComponent},
  { path: 'student', component: StudentComponent},
  { path: 'teacher',component: TeacherComponent},
  { path: '**', component: UserNotFoundComponent },














];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
