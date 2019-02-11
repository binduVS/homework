import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html',
  styleUrls: ['./dashboard-two.component.css']
})
export class DashboardTwoComponent implements OnInit {

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    console.log(this.data.getData());
  }

}
