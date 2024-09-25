import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.css']
})
export class ReportDialogComponent implements OnInit{


  constructor(private dialogRef: MatDialogRef<ReportDialogComponent>){}

  ngOnInit() {}

  closeDialog(){
    this.dialogRef.close();
  }

}
