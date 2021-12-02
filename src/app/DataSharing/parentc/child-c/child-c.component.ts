import { Component,Input, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.css']
})
export class ChildCComponent implements OnInit {

  //for Input
  @Input()parentData:any;


  //for output
  childToParent:any="Data From Child to Parent Component.";
  @Output()itemEvent = new EventEmitter<any>();


  //for viewchild
  dataFromChildForViewChild:any;
  
  constructor() {
    this.dataFromChildForViewChild="Data from child passing to parent using @viewchild";
   }
  

  ngOnInit(): void { console.log(this.parentData)
  }

  sendFromParent(){
    this.itemEvent.emit(this.childToParent);
  }
  checkCallFromParent(){
    console.log('Hi this function is called from parent only');
  }

}
