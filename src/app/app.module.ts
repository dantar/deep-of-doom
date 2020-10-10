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
import { MobPlaceholderComponent } from './components/mob-placeholder/mob-placeholder.component';
import { MobContainerDirective } from './directives/mob-container.directive';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WildernessMapComponent } from './components/wilderness-map/wilderness-map.component';

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
    MobSpiderComponent,
    MobPlaceholderComponent,
    MobContainerDirective,
    MainMenuComponent,
    WildernessMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
