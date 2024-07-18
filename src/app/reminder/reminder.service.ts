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
    console.log('reminders array now ', this.reminders)
    this.scheduleReminders();
  }

  removeReminder(reminder : any) {
    this.reminders = this.reminders.filter(r => r !== reminder);
  }

  markReminderAsDone(reminder: any) {
    reminder.done = true;
    
  }
  markReminderAsUnDone(reminder: any) {
    reminder.done = false;
  }

  isReminderAdded(name: string): boolean {
    return this.reminders.some(reminder => reminder.name === name);
  }

  scheduleReminders() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
      this.reminders.forEach(reminder  => {
        if (reminder.time === currentTime) {
          console.log("permission is ", Notification.permission)
          if(Notification.permission === "granted"){
            let body = `Reminder : It's time for  ${reminder.name}`
            let options : NotificationOptions ={
               body: `It\'s time  for ${reminder.name}`,
              icon: 'path/to/icon.png'
            }
            new Notification('Reminder' , options)
          }
          else 
          alert(`Reminder: It's time for : ${reminder.name}`);
        }
      });
    }, 60000); // Check every minute
  }
}
