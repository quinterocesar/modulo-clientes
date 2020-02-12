import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCustomer from '../customer.reducer';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  customers: Observable<any>;
  promedio: number;
  estandar: number;

  constructor(private store: Store<fromCustomer.State>) { 
    
   }

  ngOnInit() {
    this.customers = this.store.select(fromCustomer.selectAll)
    this.customers.subscribe((data)=>{
      let edades = [];
      for (let i = 0; i < data.length; i++) {
        const dato = data[i];
        edades.push(dato.edad);  
      }
      this.promedio = this.average(edades);
      this.estandar = this.standardDeviation(edades);
    })
  }

  standardDeviation(values){
    var avg = this.average(values);
    
    var squareDiffs = values.map(function(value){
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });
    
    var avgSquareDiff = this.average(squareDiffs);
  
    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }

  average(data){
    var sum = data.reduce(function(sum, value){
      return sum + value;
    }, 0);
  
    var avg = sum / data.length;
    return avg;
  }

}
