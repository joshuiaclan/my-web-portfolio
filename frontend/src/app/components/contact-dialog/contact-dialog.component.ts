import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
   
  closeDialog() {
    this.dialog.closeAll();
  }
}
