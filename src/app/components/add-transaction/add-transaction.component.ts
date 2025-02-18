import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  description = '';
  transaction = {
    type: 'income', 
    amount: 0
  };

  constructor(private transactionService: TransactionService) {}

  addTransaction() {
    if (this.description && this.transaction) {
      const newTransaction = new Transaction(
        Date.now(), // Unique ID based on current time
        this.description,
        this.transaction.amount,
        this.transaction.type
      );
      this.transactionService.getTransactions().push(newTransaction);
      this.clearForm();
    }
  }

  clearForm() {
    this.description = '';
    this.transaction.amount = 0;
    this.transaction.type = 'income';
  }
}