import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule
  } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TransactionListComponent} from './components/transaction-list/transaction-list.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';

import { TransactionService } from './services/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    AddTransactionComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  title = 'transaction-app';

}