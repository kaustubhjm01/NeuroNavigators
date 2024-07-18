import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../reminder/reminder.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  reminders: any[] = [];
  calendarOptions: any;

  constructor(private reminderService: ReminderService) {}

  ngOnInit(): void {
    this.reminders = this.reminderService.getReminders();
    console.log('reminders are ', this.reminders)
    this.initializeEvents();
  }

  initializeEvents() {
    let arr = this.reminders.map(reminder => ({
      title: reminder.name,

      // const combinedString = `${dateString} ${timeString}`;
      // const dateObject = new Date(combinedString);
      start: new Date(`${reminder.date} ${reminder.time}`),
      description: reminder.description
    }));
    
    console.log('events are ', arr )

    
    this.calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      events: arr
    };
  }
}
