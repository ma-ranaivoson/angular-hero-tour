import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes; 
  }

  getHero(id: number): Observable<Hero> {
    const hero = of(HEROES.find(h => h.id === id))!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return hero;
  }
}
