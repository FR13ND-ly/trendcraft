import { Injectable } from '@angular/core';
import { selectedLanguageIndex } from '../feature/language-pack';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  loadLanguage(): Promise<void> {
    return new Promise((resolve) => {
      const storedIndex = localStorage.getItem('selectedLanguageIndex');
      if (storedIndex !== null) {
        selectedLanguageIndex.set(parseInt(storedIndex, 10));
      } else {
        selectedLanguageIndex.set(0);
      }
      resolve();
    });
  }

  get languageIndex(): number | null {
    return selectedLanguageIndex();
  }
}
