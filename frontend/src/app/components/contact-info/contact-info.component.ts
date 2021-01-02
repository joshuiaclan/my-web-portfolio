import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  contactMe() {
    this.dialog.open(ContactDialogComponent, {
      height: '500px',
      width: '500px'
    });
  }
}
