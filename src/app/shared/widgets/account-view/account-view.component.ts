import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../../../models/account.model';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: [ './account-view.component.scss' ],
})
export class AccountViewComponent {
  @Output() depositToAccount = new EventEmitter<number>();
  @Output() withdrawFromAccount = new EventEmitter<number>();
  @Output() deleteAccount = new EventEmitter<void>();

  @Input() account: Account | undefined;

  constructor() {}
}


