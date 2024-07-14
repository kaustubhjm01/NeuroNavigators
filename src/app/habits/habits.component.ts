import { Component, OnInit } from '@angular/core';
// import { ReminderService } from '../reminder.service';
import { ReminderService } from '../reminder/reminder.service';
@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {
  defaultHabits: any[];
  newHabit: any = { name: '', description: '' };
  display: boolean = false;

  constructor(private reminderService: ReminderService) { }

  ngOnInit(): void {
    this.defaultHabits = [
      { name: 'Exercise', description: 'Daily morning exercise' },
      { name: 'Read', description: 'Read a book for 30 minutes' },
      { name: 'Meditate', description: 'Meditate for 15 minutes' }
    ];
  }

  addHabitToReminder(habit : any): void {
    const reminder = { name: habit.name, time: '' };
    this.reminderService.addReminder(reminder);
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
      this.newHabit = { name: '', description: '' };
    }
  }
}
