// reminder.component.ts
import { Component, OnInit } from '@angular/core';
import { ReminderService } from './reminder.service';
import { ReminderDialogComponent } from '../reminder-dialog/reminder-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HabitsComponent } from '../habits/habits.component';
import { defer } from 'rxjs';
interface Activity {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  
})
export class ReminderComponent implements OnInit {
  reminders :any  = [];
  todayReminders : any = []
  upcomingReminders  : any = []
  constructor(private reminderService: ReminderService, public dialog: MatDialog
, private habits : HabitsComponent


  ) {}

  ngOnInit() {
    this.reminders = this.reminderService.getReminders();
    this.categorizeReminders();
    this.reminderService.scheduleReminders();
  }

  categorizeReminders() {
    const today = new Date().toDateString();

    this.todayReminders = this.reminders.filter(reminder => {
      return new Date(reminder.date).toDateString() === today;
    });

    this.upcomingReminders = this.reminders.filter(reminder => {
      return new Date(reminder.date).toDateString() !== today;
    });
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
        this.categorizeReminders();

      }
    });
  }

  removeReminder(reminder): void {
    let defaultReminders = this.habits.getDefaultHabits();
    console.log(defaultReminders)
    this.reminderService.removeReminder(reminder);
    // defaultReminders.map((rem)=> {
    //   if(rem.habit ===reminder.habit) 
    // })
    // for(let index  in defaultReminders ){
    //   // if(rem.habit === reminder.habit)
    //   // console.log(defaultReminders[rem ])
    //   let rem = defaultReminders[index];
    //   if(rem.habit ===reminder.habit){
    //       this.reminderService.markReminderAsUnDone(rem)
    //   }
    // }
    this.reminders = this.reminderService.getReminders();
    this.categorizeReminders();
  }

  markAsDone(reminder): void {
    this.reminderService.markReminderAsDone(reminder);
  }
  isReminderDue(reminder: any): boolean {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    return currentTime >= reminder.time;
  }
}
