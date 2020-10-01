import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MazeMapComponent } from './components/maze-map/maze-map.component';
import { FightMobComponent } from './components/fight-mob/fight-mob.component';
import { HomeVillageComponent } from './components/home-village/home-village.component';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { FullscreenToggleComponent } from './components/fullscreen-toggle/fullscreen-toggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobSkeletonComponent } from './components/mob-skeleton/mob-skeleton.component';
import { MobChestComponent } from './components/mob-chest/mob-chest.component';
import { MobExitComponent } from './components/mob-exit/mob-exit.component';
import { MobSpiderComponent } from './components/mob-spider/mob-spider.component';

@NgModule({
  declarations: [
    AppComponent,
    MazeMapComponent,
    FightMobComponent,
    HomeVillageComponent,
    GamePlayComponent,
    FullscreenToggleComponent,
    MobSkeletonComponent,
    MobChestComponent,
    MobExitComponent,
    MobSpiderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
