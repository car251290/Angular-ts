import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-transaction-list',
  standalone: true,  // ✅ Ensure it's a standalone component
  imports: [CommonModule],  // ✅ Import necessary Angular modules
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  /**
   * An array of Transaction objects representing the list of transactions.
   */
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {
    // Inject the TransactionService into the component
    const trans = new Transaction(1, 'Salary', 2000, 'income');
    this.transactions.push(trans);
  }

  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactions();
  }

  deleteTransaction(id: number) {
    this.transactionService.deleteTransaction(id);
  }
}