import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login-create/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{
  contentValue: string = "> <"
  show: boolean = false;

  constructor(){}

  ngOnInit(){}


  display(){
    this.show? this.show=false : this.show=true;
  }

  changeContentValue(){
    this.contentValue === "> <"? this.contentValue="< >" : this.contentValue="> <";
  }
}
