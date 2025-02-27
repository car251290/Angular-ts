import { Component } from '@angular/core';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component'; 
import {TransactionChartComponent} from './components/transaction-chart/TransactionChart.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [TransactionListComponent, AddTransactionComponent,TransactionChartComponent],
  
})
export class AppComponent {
  title = 'Transaction App';
}