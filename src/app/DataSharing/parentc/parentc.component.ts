import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { ChildCComponent } from './child-c/child-c.component';

@Component({
  selector: 'app-parentc',
  templateUrl: './parentc.component.html',
  styleUrls: ['./parentc.component.css']
})
export class ParentcComponent implements OnInit, AfterViewInit {

  constructor() { }
  parentToChild:any="Data From Parent to Child Component.";

 // this is for @output
  dataFromChild:any;

  @ViewChild(ChildCComponent)ChildCComponent:any;
  dataFrmChildByViewChild:any;

  ngOnInit(): void {
  }

  emitDataFromChild(ev:any){
    console.log(ev);
    this.dataFromChild= ev;
  }

  ngAfterViewInit(){
    setTimeout(() =>{
      console.log(this.ChildCComponent.dataFrmChildByViewChild);
      this.dataFrmChildByViewChild=this.ChildCComponent.dataFromChildForViewChild;
      this.ChildCComponent.checkCallFromParent()
    },0 );

  }
 
}
