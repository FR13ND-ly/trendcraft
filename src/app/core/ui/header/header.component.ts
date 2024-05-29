import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import {
  languages,
  selectedLanguage,
  selectedLanguageIndex,
  selectedLanguagePack,
} from '../../feature/language-pack';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  languagePack = selectedLanguagePack;
  languages = [...languages];
  selectedLanguageIndex = selectedLanguageIndex;
  selectedLanguage = selectedLanguage;

  ngOnInit(): void {
    // this.languages.shift();
  }

  onChangeLanguagePack(option: any) {
    const selectedLanguageIndex = parseInt(option.value);
    this.selectedLanguageIndex.set(parseInt(option.value));
    localStorage.setItem(
      'selectedLanguageIndex',
      selectedLanguageIndex.toString()
    );
  }
}
