import { Component, OnInit } from "@angular/core";
import { Istudent2 } from "../../models/student1";

@Component({
  selector:'app-student1',
  templateUrl:'./student1.component.html',
  styleUrls:['./student1.component.scss']
})
export class student1component implements OnInit{


  student1 :Array<Istudent2> = [
    {
      fname:"Deepti",
      lname:"Jadhav",
      email:"deepti@gmail.com",
      age:30
    },
    {
      fname:"Jay",
      lname:"Jadhav",
      email:"jay@gmail.com",
      age:30
    }

  ]

  constructor(){

  }

  ngOnInit(): void {

  }

  onstdAdd(fname:HTMLInputElement, lname:HTMLInputElement, email:HTMLInputElement, age:HTMLInputElement){
  let newstd : Istudent2 = {
    fname: fname.value,
    lname: lname.value,
    email: email.value,
    age: isNaN(+age.value) ? "-" : +age.value
  }
  this.student1.unshift(newstd);
  fname.value = '';
  lname.value = '';
  email.value = '';
  age.value = '';
  }



}
