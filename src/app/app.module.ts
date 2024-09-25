import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginCreateComponent } from './components/login-create/login-create.component';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { CardComponent } from './components/card/card.component';
import { BeGridModule } from 'be-grid';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggingInterceptor } from './utils/logging.interceptor';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ReportComponent } from './components/report/report.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { ReportDialogComponent } from './components/report/report-dialog/report-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    LoginCreateComponent,
    LayoutComponent,
    CardComponent,
    DashboardComponent,
    AttendanceComponent,
    ReportComponent,
    MaterialsComponent,
    ReportDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    BeGridModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
