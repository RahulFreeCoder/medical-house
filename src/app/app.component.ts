import { Component } from '@angular/core';


@Component({
  selector: 'pm-root',
  template: `
   <nav-root></nav-root>
   <router-outlet></router-outlet>
 
    
  ` 
})
export class AppComponent {
 constructor() {} 
}
