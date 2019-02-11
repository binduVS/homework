import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  links = {
    link1: '/dashboard1',
    link2: '/dashboard2'
  }

  constructor() { }
  ngOnInit() {
  }

}
