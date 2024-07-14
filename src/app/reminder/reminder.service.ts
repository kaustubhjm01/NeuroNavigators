import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminders :any = [];
  private intervalId : any;

  constructor() { }

  getReminders() {
    return this.reminders;
  }

  addReminder(reminder : any) {
    this.reminders.push(reminder);
    this.scheduleReminders();
  }

  removeReminder(reminder : any) {
    this.reminders = this.reminders.filter(r => r !== reminder);
  }

  scheduleReminders() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
      this.reminders.forEach(reminder  => {
        if (reminder.time === currentTime) {
          alert(`Reminder: It's time to take your medicine: ${reminder.name}`);
        }
      });
    }, 60000); // Check every minute
  }
}
