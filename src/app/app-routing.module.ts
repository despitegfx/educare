import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCreateComponent } from './components/login-create/login-create.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ReportComponent } from './components/report/report.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { AdmissionComponent } from './components/admission/admission.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: "full"},
  {path: 'login', component: LoginCreateComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'attendance', component: AttendanceComponent},
  {path: 'report', component: ReportComponent},
  {path: 'materials', component: MaterialsComponent},
  {path: 'admission', component: AdmissionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
