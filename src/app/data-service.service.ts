import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceService {
  data = {
    name : 'bindu',
    city : 'Bangalore'
  }
  constructor() {
    console.log(this.data);
   }
  
  getData(): any{
    return this.data;
  };
}
