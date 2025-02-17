import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
})
export class AddTransactionComponent {
  description = '';
  amount = 0;
  type = 'income'; // default type

  constructor(private transactionService: TransactionService) {}

  addTransaction() {
    if (this.description && this.amount) {
      const newTransaction = new Transaction(
        Date.now(), // Unique ID based on current time
        this.description,
        this.amount,
        this.type
      );
      this.transactionService.addTransaction(newTransaction);
      this.clearForm();
    }
  }

  clearForm() {
    this.description = '';
    this.amount = 0;
    this.type = 'income';
  }
}