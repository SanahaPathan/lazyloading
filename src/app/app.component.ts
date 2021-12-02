import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  constructor (private route: Router){
}
navigateToHome(){

  this.route.navigate(['']);
}
navigateToStudent(){

  this.route.navigate(['student']);
}
navigateToFaculty(){

  this.route.navigate(['faculty'])
  //this.route.navigateByUrl('faculty');
}
 
}

