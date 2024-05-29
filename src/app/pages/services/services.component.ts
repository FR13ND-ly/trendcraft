import { Component } from '@angular/core';
import { selectedLanguagePack } from '../../core/feature/language-pack';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  languagePack = selectedLanguagePack;
}
