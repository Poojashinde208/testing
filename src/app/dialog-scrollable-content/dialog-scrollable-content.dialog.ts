import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-dialog-scrollable-content',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './dialog-scrollable-content.dialog.html',
  styleUrl: './dialog-scrollable-content.dialog.scss'
})
export class DialogScrollableContentDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogScrollableContentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
}
