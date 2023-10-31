import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {UntypedFormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {
  email = new UntypedFormControl('', [Validators.required, Validators.email]);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
   
  closeDialog() {
    this.dialog.closeAll();
  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
