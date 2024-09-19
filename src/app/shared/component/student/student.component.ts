import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Istudent } from "../../models/student";



@Component({
  selector:'app-student',
  templateUrl:'./student.component.html',
  styleUrls:['./student.component.scss']
})
export class studentcomponent implements OnInit{

  @ViewChild('fname') fnamecontrol ! : ElementRef;
  @ViewChild('lname') lnamecontrol ! : ElementRef;
  @ViewChild('email') emailcontrol ! : ElementRef;
  @ViewChild('age') agecontrol ! : ElementRef;
  student:Array<Istudent> = [
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

  onstdAdd(){
    // console.log(`event triggered!!!`)
    let newstd : Istudent ={
     fname:this.fnamecontrol.nativeElement.value,
     lname:this.lnamecontrol.nativeElement.value,
     email:this.emailcontrol.nativeElement.value,
     age:this.agecontrol.nativeElement.value,
    }
    console.log(newstd)
    this.student.unshift(newstd);
    //for value reset or empty
    this.fnamecontrol.nativeElement.value = '';
    this.lnamecontrol.nativeElement.value = '';
    this.emailcontrol.nativeElement.value = '';
    this.agecontrol.nativeElement.value = '';
  }
}
