import { Component, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/ui/header/header.component';
import { FooterComponent } from './core/ui/footer/footer.component';
import { selectedLanguageIndex } from './core/feature/language-pack';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    afterNextRender(() => {});
  }
}
