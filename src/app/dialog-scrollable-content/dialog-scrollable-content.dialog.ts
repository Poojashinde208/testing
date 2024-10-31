import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-dialog-scrollable-content',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatCardContent,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle
  ],
  templateUrl: './dialog-scrollable-content.dialog.html',
  styleUrl: './dialog-scrollable-content.dialog.scss'
})
export class DialogScrollableContentDialog {
  events = [];
  constructor(
    public dialogRef: MatDialogRef<DialogScrollableContentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(){
    console.log('data', this.data )
    this.events = this.data.ele.events
    console.log('events', this.events )
  }
}
