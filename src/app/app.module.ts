import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcamComponent } from './webcam/webcam.component';
import {WebcamModule} from 'ngx-webcam';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ReminderComponent } from './reminder/reminder.component';
import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HomeComponent } from './home/home.component';
import { HabitsComponent } from './habits/habits.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReminderDialogComponent } from './reminder-dialog/reminder-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ReminderService } from './reminder/reminder.service';
@NgModule({
  declarations: [
    AppComponent,
    WebcamComponent,
    ContentDisplayComponent,
    ChatbotComponent,
    ReminderComponent,
    HomeComponent,
    HabitsComponent,
    CalendarComponent,
    NavbarComponent,
    ReminderDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebcamModule,
    FormsModule,
    ZXingScannerModule,
    MenubarModule,
    ButtonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CardModule
  ],
  providers: [ReminderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
