import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  //routeparam: it gives direct value
  constructor(private actRoute: ActivatedRoute) {
    let facultyId = this.actRoute.snapshot.params.id;
    let facultyName = this.actRoute.snapshot.params.name;
    let staffAge= this.actRoute.snapshot.params.age
    console.log(facultyId, facultyName,staffAge);

//param map :this will gives value in the form of observables

    this.actRoute.paramMap.subscribe((res)=>{
      console.log(res);
      let facultyId1 = res.get('id');
      let facultyName1 = res.get('name');
      let facultyAge=res.get('age');

      console.log(facultyId1, facultyName1, facultyAge);
    })
   }

  ngOnInit(): void {
  }

}
