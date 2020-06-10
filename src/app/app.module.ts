import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MazeMapComponent } from './components/maze-map/maze-map.component';
import { FightMobComponent } from './components/fight-mob/fight-mob.component';

@NgModule({
  declarations: [
    AppComponent,
    MazeMapComponent,
    FightMobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
