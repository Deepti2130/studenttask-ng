import { Component, OnInit } from "@angular/core";
import { Istd2 } from "../../models/student2";

@Component({
  selector: 'app-std2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.scss']
})
export class student2component implements OnInit {
  fname !: string;
  lname !: string;
  email !: string;
  age !: number;

  std2: Array<Istd2> = [
    {
      fname: "Sneha",
      lname: "Patil",
      email: "deepti@gmail.com",
      age: 30
    },
    {
      fname: "Jay",
      lname: "Jadhav",
      email: "jay@gmail.com",
      age: 30
    }
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

  onstdAdd() {
    let data: Istd2 = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      age: this.age
    }
    this.std2.push(data)
    this.fname = '';
    this.lname = '';
    this.email = '';
    this.age = 0

  }

}
