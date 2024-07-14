import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reminder-dialog',
  templateUrl: './reminder-dialog.component.html',
  styleUrls: ['./reminder-dialog.component.css']
})
export class ReminderDialogComponent {
  display: boolean = false ; 
  constructor(
    public dialogRef: MatDialogRef<ReminderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.display = true;
  }

  onNoClick(): void {
    this.display = false;
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.display = false;
    this.dialogRef.close(this.data);
  }
}
