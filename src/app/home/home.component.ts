import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }
  data1:any=[
    {"id":1, "name":"John", "age":23, "city":"Agra", 'dob':new Date()},
    {"id":2,"name":"Steve", "age":28, "city":"Delhi", 'dob':new Date()},
    {"id":3,"name":"Peter", "age":32, "city":"Chennai", 'dob':new Date()},
    {"id":4,"name":"Chaitanya", "age":28, "city":"Bangalore", 'dob':new Date()}
 ];

  ngOnInit(): void {
  }
  navigateToFacultyDetails(dt:any){
    // console.log(dt, dt.id);
    this.route.navigate(['faculty/'+dt.id+'/'+dt.name+'/'+ dt.age]);
  }
}
