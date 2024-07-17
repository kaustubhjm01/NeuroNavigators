import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitsComponent } from './habits/habits.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reminders', component: HabitsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chatbot', component: ChatbotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
