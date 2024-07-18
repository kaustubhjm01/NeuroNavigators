import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: any[];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' , routerLinkActiveOptions: { exact: true } },
      { label: 'Reminders', icon: 'pi pi-fw pi-list', routerLink: '/reminders' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: '/calendar' },
      { label: 'Chatbot', icon: 'pi pi-fw pi-calendar', routerLink: '/chatbot' },
    ];
  }
}
