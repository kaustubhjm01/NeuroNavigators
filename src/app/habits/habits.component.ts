import { Component, OnInit } from '@angular/core';
// import { ReminderService } from '../reminder.service';
import { ReminderService } from '../reminder/reminder.service';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {
  defaultHabits: any[];
  messages: any[] = []; 
  newHabit: any = { name: '', description: '', time : null };
  display: boolean = false;
  selectedTime: Date = new Date();

  reminders: any[] = [];
  constructor(private reminderService: ReminderService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.defaultHabits = [
      { name: 'Exercise', description: 'Daily morning exercise', selectedTime: null },
      { name: 'Read', description: 'Read a book for 30 minutes', selectedTime: null },
      { name: 'Meditate', description: 'Meditate for 15 minutes', selectedTime: null },
      { name: 'Workout', description: 'Go to Workout for 30 minutes', selectedTime: null }
    ];
    this.reminders = this.reminderService.getReminders();
  }
  getDefaultHabits(){
    return this.defaultHabits;
  }

  addHabitToReminder(habit : any): void {
    if (this.reminderService.isReminderAdded(habit.name)) {
      this.messageService.add({severity:'warn', summary:'Reminder Exists', detail:'This reminder is already added.'});
      this.autoClearMessages();
      return;
    }

    if (!habit.selectedTime) {
      console.log('not valid ')
      this.messageService.add({severity: 'warn', summary: 'Time Required', detail: 'Please select a time for the habit.'});
      this.autoClearMessages();
      return;
    }

    const reminder = { name: habit.name, time: habit.selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }), decription : habit.description };
    this.reminderService.addReminder(reminder);
    this.messageService.add({severity:'success', summary:'Reminder Added', detail:'Reminder has been added successfully.'});
    this.autoClearMessages();

    this.reminders = this.reminderService.getReminders();

    this.display = false;
    // old code 
    // const reminder = { name: habit.name, time: '' };
    // this.reminderService.addReminder(reminder);
  }
  private autoClearMessages(): void {
    setTimeout(() => {
      this.clearMessages();
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  private clearMessages(): void {
    this.messages = []; // Clear the messages array
  }

  openCreateHabitDialog(): void {
    this.display = true;
  }

  onCancelClick(): void {
    this.display = false;
  }

  onSaveClick(): void {
    if (this.newHabit.name && this.newHabit.description) {
      this.defaultHabits.push({ name: this.newHabit.name, description: this.newHabit.description });
      this.display = false;
      this.newHabit = { name: '', description: '', time : null };
    }
  }

  isHabitAdded(habit: any): boolean {
    this.reminders = this.reminderService.getReminders();
    return this.reminders.some(reminder => reminder.name === habit.name);
  }
}
