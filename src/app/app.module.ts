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
import { NpcHealerComponent } from './components/npc/npc-healer/npc-healer.component';
import { NpcPlaceholderComponent } from './components/npc/npc-placeholder/npc-placeholder.component';
import { MapMazeCaveComponent } from './components/map/map-maze-cave/map-maze-cave.component';
import { MapVillageComponent } from './components/map/map-village/map-village.component';
import { MapBridgeComponent } from './components/map/map-bridge/map-bridge.component';
import { MapLockedComponent } from './components/map/map-locked/map-locked.component';
import { CastSpellComponent } from './components/spell/cast-spell/cast-spell.component';
import { SpellDartComponent } from './components/spell/spell-dart/spell-dart.component';
import { ManaCounterComponent } from './components/counter/mana-counter/mana-counter.component';
import { LifeCounterComponent } from './components/counter/life-counter/life-counter.component';
import { GoldCounterComponent } from './components/counter/gold-counter/gold-counter.component';
import { ExpCounterComponent } from './components/counter/exp-counter/exp-counter.component';

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
    WildernessMapComponent,
    NpcHealerComponent,
    NpcPlaceholderComponent,
    MapMazeCaveComponent,
    MapVillageComponent,
    MapBridgeComponent,
    MapLockedComponent,
    CastSpellComponent,
    SpellDartComponent,
    ManaCounterComponent,
    LifeCounterComponent,
    GoldCounterComponent,
    ExpCounterComponent
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
