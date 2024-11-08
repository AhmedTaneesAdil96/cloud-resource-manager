import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  activeLink: string = 'Home';

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
}
