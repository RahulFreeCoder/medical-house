import { Component } from '@angular/core';

import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service';

@Component({
  selector: 'pm-root',
  template: `
  <fw-framework-body></fw-framework-body>
  <!--<nav-root></nav-root>
  <router-outlet></router-outlet>-->
    
  ` 
})
export class AppComponent {
 constructor (private frameworkConfigService: FrameworkConfigService) {

    let config:FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com'},
        { imageFile: 'assets/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
        { imageFile: 'assets/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);

  }
}
// <router-outlet></router-outlet>