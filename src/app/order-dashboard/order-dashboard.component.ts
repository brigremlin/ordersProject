import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
  interval;
  lastNumber=0;
  orders = [];

  constructor() { }

  ngOnInit(): void {
  }

  onStartDay() {
    this.interval = setInterval(() => {
      this.lastNumber++;
      console.log(this.lastNumber);
      this.orders.push(this.lastNumber);
      console.log(this.orders);
    },2000)

  }
  onEndDay(){
    clearInterval(this.interval);
  }

}
