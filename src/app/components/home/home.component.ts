import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { GetdataService } from 'src/app/service/getdata.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _Router: Router,
    private _GetdataService: GetdataService
  ) {}

  //* variables
  customers: any;
  transactions: any;

  ngOnInit(): void {
    this._GetdataService.getCustomers().subscribe((data) => {
      console.log(data);
      this.customers = data;
    });

    this._GetdataService.getTransaction().subscribe((data) => {
      console.log(data);
      this.transactions = data;
    });
  }
  go(): void {
    this._Router.navigate(['/about']);
  }
}
