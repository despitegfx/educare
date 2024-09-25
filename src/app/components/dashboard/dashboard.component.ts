import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login-create/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  ELEMENT_DATA: any[] = [
    {fred: 2, name: 'Helium', weight: 4.0026, symbol: 'He', under: "bug", age: 12, gender: 'Male', },
    {fred: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', under: "Testing"},
    {fred: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', under: "Testing"},
    {fred: 5, name: 'Boron', weight: 10.811, symbol: 'B', under: "C"},
    {fred: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', under: "Testing"},
    {fred: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', under: "Testing"},
    {fred: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', under: "Testing"},
    {fred: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', under: "Testing"},
    {fred: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', under: "Testing", others: "hejrhe"},
  ];
  
  defColumns: any[] = [
    {name: "fred", label: "Fred", columnSortable: false, rowSelection: true}, 
    {name: "name", columnSortable: false, cellStyle: (data: any) => {return (data.name == "Boron")? {background:'green', color: 'white'}: ""} },
    {name: "weight", label: "Weight", cellFlag: (data: any) => {return (data.weight == 4.0026)? {style:{ background:'yellow', color: 'black'}, flagText: "primary"}: ""} },
    {name: "symbol", columnSortable: true},
    {name: "under", label: "Understand", columnSortable: false},
    {name: "action", actionButtons: [
      {label: 'Edit', type: 'outline', color: "green"},
      {label: 'Confirm', type: 'fill', color: "blue",  hideButton: (data?: any) => {return (data.under == "C")? true : false}},
      {label: 'Delete', type: 'fill', color: "orange", disabledButton: (data: any) => { return (data.symbol == "C")? true : false } }
    ]},
  ];

  selectedRow: any;
  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;

  constructor(private authService: AuthService){}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.getUser().subscribe(data=>{
      console.log(data);
      
    })
    
  }

  onSelectedRow(event:any){
    this.selectedRow = event;
  }

  rowSelection(event:any){
    console.log(event);
  }

}
