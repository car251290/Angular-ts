import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model'; // Make sure you have the correct model path

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [
    { id: 1, description: 'Salary', amount: 2000, type: 'income' },
    { id: 2, description: 'Groceries', amount: -150, type: 'expense' },
    { id: 3, description: 'Rent', amount: -500, type: 'expense' }
  ];

  constructor() { }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getIncome(): Transaction[] {
    return this.transactions.filter(t => t.type === 'income');
  }

  getExpenses(): Transaction[] {
    return this.transactions.filter(t => t.type === 'expense');
  }
  deleteTransaction(id: number) {
    this.transactions = this.transactions.filter(t => t.id !== id);
  }
}