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
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
      { label: 'Habits', icon: 'pi pi-fw pi-list', routerLink: '/habits' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar', routerLink: '/calendar' },
    ];
  }
}
