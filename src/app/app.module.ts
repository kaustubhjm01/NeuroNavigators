// import { NgModule } from '@angular/core';
// // import { BrowserModule } from '@angular/platform-browser';
// // import { BrowserModule } from '@angular/platform-browser';
// import { BrowserModule } from '@angular/platform-browser';
// // import BrowserAnimationModule
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { WebcamComponent } from './webcam/webcam.component';
// import {WebcamModule} from 'ngx-webcam';
// import { ContentDisplayComponent } from './content-display/content-display.component';
// import { ChatbotComponent } from './chatbot/chatbot.component';
// import { ReminderComponent } from './reminder/reminder.component';
// // import { FormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
// import { ZXingScannerModule } from '@zxing/ngx-scanner';
// import { HomeComponent } from './home/home.component';
// import { HabitsComponent } from './habits/habits.component';
// import { CalendarComponent } from './calendar/calendar.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { MenubarModule } from 'primeng/menubar';
// import { ButtonModule } from 'primeng/button';
// import { CarouselModule } from 'primeng/carousel';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// // import { RouterModule } from '@angular/router';

// import { RouterModule } from '@angular/router';
// import { ReminderDialogComponent } from './reminder-dialog/reminder-dialog.component';
// import { DialogModule } from 'primeng/dialog';
// import { InputTextModule } from 'primeng/inputtext';
// import { CardModule } from 'primeng/card';
// import { ReminderService } from './reminder/reminder.service';
// import { MusicComponent } from './music/music.component';
// import { PhotosComponent } from './photos/photos.component';
// import { CommonModule } from '@angular/common';
// import { VideoComponent } from './video/video.component';
// import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';
// import { CalendarModule } from 'primeng/calendar';
// import { MessageModule } from 'primeng/message';
// import { MessagesModule } from 'primeng/messages';
// import { SafePipe } from './pipes/safepipe';
// @NgModule({
//   declarations: [
//     AppComponent,
//     WebcamComponent,
//     ContentDisplayComponent,
//     ChatbotComponent,
//     ReminderComponent,
//     HomeComponent,
//     HabitsComponent,
//     CalendarComponent,
//     NavbarComponent,
//     ReminderDialogComponent,
//     SafePipe
//     // CarouselModule
//     // VideoComponent
//   ],
//   imports: [
//     CommonModule,
//     // CarouselModule,
//     BrowserModule,
//     BrowserAnimationsModule,
//     AppRoutingModule,
//     WebcamModule,
//     FormsModule,
//     ZXingScannerModule,
//     MenubarModule,
//     ButtonModule,
//     RouterModule,
//     BrowserModule,
//     // BrowserAnimationsModule,
//     FormsModule,
//     DialogModule,
//     ButtonModule,
//     InputTextModule,
//     CardModule,
//     MusicComponent,
//     PhotosComponent,
//     VideoComponent,
//     // SafePipe,
//     CalendarModule,
//     ToastModule,
//     MessageModule,
//     MessagesModule,
    
//   ],
//   providers: [ReminderService, MessageService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcamComponent } from './webcam/webcam.component';
import { WebcamModule } from 'ngx-webcam';
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
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { ReminderDialogComponent } from './reminder-dialog/reminder-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ReminderService } from './reminder/reminder.service';
import { MusicComponent } from './music/music.component';
import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { SafePipe } from './pipes/safepipe';

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
    ReminderDialogComponent,
    // SafePipe,
    // MusicComponent,
    // PhotosComponent,
    // VideoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WebcamModule,
    FormsModule,
    ZXingScannerModule,
    MenubarModule,
    ButtonModule,
    RouterModule,
    DialogModule,
    InputTextModule,
    CardModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    CalendarModule,
    MusicComponent,   // Import the standalone component
    PhotosComponent,  // Import the standalone component
    VideoComponent    // Import the standalone component
  ],
  providers: [ReminderService, MessageService, HabitsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

