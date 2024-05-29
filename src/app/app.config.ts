import { APP_INITIALIZER, ApplicationConfig, PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { selectedLanguageIndex } from './core/feature/language-pack';
import { isPlatformBrowser } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: (platformId: Object) => {
        return () => {
          if (isPlatformBrowser(platformId)) {
            const storedIndex = localStorage.getItem('selectedLanguageIndex');
            if (storedIndex !== null && storedIndex !== '0') {
              selectedLanguageIndex.set(parseInt(storedIndex, 10));
            } else {
              selectedLanguageIndex.set(1);
            }
          }
        };
      },
      deps: [PLATFORM_ID],
      multi: true,
    },
  ],
};
