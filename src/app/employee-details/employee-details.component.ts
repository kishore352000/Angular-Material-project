import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  name='Kishore';
  age=22;
  gender='Male';
  email='kishore@gmail.com'



  constructor() { }

  ngOnInit(): void {
  }

}
