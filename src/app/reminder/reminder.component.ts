// reminder.component.ts
import { Component, OnInit } from '@angular/core';
import { ReminderService } from './reminder.service';
import { ReminderDialogComponent } from '../reminder-dialog/reminder-dialog.component';
import { MatDialog } from '@angular/material/dialog';
interface Activity {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  reminders :any  = [];

  constructor(private reminderService: ReminderService, public dialog: MatDialog) {}

  ngOnInit() {
    this.reminders = this.reminderService.getReminders();
    this.reminderService.scheduleReminders();
  }

  openAddReminderDialog(): void {
    const dialogRef = this.dialog.open(ReminderDialogComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reminderService.addReminder(result);
        this.reminders = this.reminderService.getReminders();
      }
    });
  }

  removeReminder(reminder): void {
    this.reminderService.removeReminder(reminder);
    this.reminders = this.reminderService.getReminders();
  }
}
