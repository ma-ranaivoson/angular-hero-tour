import { Component, VERSION } from '@angular/core';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [HeroService]
})
export class AppComponent  {
  title = 'Tour of Heroes';
}
