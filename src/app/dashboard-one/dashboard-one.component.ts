import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.css']
})
export class DashboardOneComponent implements OnInit {

  constructor(private data : DataServiceService) { }

  ngOnInit() {
    console.log(this.data.getData());
  }

}
