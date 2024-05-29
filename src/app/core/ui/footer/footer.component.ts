import { Component } from '@angular/core';
import { selectedLanguagePack } from '../../feature/language-pack';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  languagePack = selectedLanguagePack;
  year = new Date().getFullYear();
}
