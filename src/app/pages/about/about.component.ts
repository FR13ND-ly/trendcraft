import { Component } from '@angular/core';
import { selectedLanguagePack } from '../../core/feature/language-pack';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  languagePack = selectedLanguagePack;
}
