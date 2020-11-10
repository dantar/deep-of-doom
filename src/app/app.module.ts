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
import { MobSkeletonComponent } from './components/mob/mob-skeleton/mob-skeleton.component';
import { MobChestComponent } from './components/mob/mob-chest/mob-chest.component';
import { MobExitComponent } from './components/mob/mob-exit/mob-exit.component';
import { MobSpiderComponent } from './components/mob/mob-spider/mob-spider.component';
import { MobPlaceholderComponent } from './components/mob/mob-placeholder/mob-placeholder.component';
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
import { DungeonWildernessAComponent } from './components/dungeon/dungeon-wilderness-a/dungeon-wilderness-a.component';
import { DungeonWildernessBComponent } from './components/dungeon/dungeon-wilderness-b/dungeon-wilderness-b.component';
import { DungeonWildernessCComponent } from './components/dungeon/dungeon-wilderness-c/dungeon-wilderness-c.component';
import { DungeonWildernessDComponent } from './components/dungeon/dungeon-wilderness-d/dungeon-wilderness-d.component';
import { DungeonWildernessEComponent } from './components/dungeon/dungeon-wilderness-e/dungeon-wilderness-e.component';
import { MobTrollComponent } from './components/mob/mob-troll/mob-troll.component';
import { MapBookshelfComponent } from './components/map/map-bookshelf/map-bookshelf.component';
import { SpellPlaceholderComponent } from './components/spell/spell-placeholder/spell-placeholder.component';
import { MenuBookshelfComponent } from './components/menu/menu-bookshelf/menu-bookshelf.component';
import { MenuHealerComponent } from './components/menu/menu-healer/menu-healer.component';
import { MenuSpellbookComponent } from './components/menu/menu-spellbook/menu-spellbook.component';
import { ManaCostComponent } from './components/counter/mana-cost/mana-cost.component';
import { ExpCostComponent } from './components/counter/exp-cost/exp-cost.component';
import { MenuInventoryComponent } from './components/menu/menu-inventory/menu-inventory.component';
import { OpenInventoryComponent } from './components/inventory/open-inventory/open-inventory.component';
import { GoldCostComponent } from './components/counter/gold-cost/gold-cost.component';
import { ItemHealingStoneComponent } from './components/inventory/item-healing-stone/item-healing-stone.component';
import { ItemPlaceholderComponent } from './components/inventory/item-placeholder/item-placeholder.component';
import { ItemCounterComponent } from './components/counter/item-counter/item-counter.component';
import { ItemStackComponent } from './components/counter/item-stack/item-stack.component';
import { MobScrapsComponent } from './components/mob/mob-scraps/mob-scraps.component';
import { MobShadowComponent } from './components/mob/mob-shadow/mob-shadow.component';
import { NpcVillageChiefComponent } from './components/npc/npc-village-chief/npc-village-chief.component';
import { MenuVillageChiefComponent } from './components/menu/menu-village-chief/menu-village-chief.component';
import { QuestPlaceholderComponent } from './components/quests/quest-placeholder/quest-placeholder.component';
import { ShineComponent } from './components/inventory/shine/shine.component';
import { ZoomInComponent } from './components/gui/zoom-in/zoom-in.component';
import { PopupRewardComponent } from './components/gui/popup-reward/popup-reward.component';
import { FightHitMobComponent } from './components/fight/fight-hit-mob/fight-hit-mob.component';
import { ActionPlaceholderComponent } from './components/fight/action-placeholder/action-placeholder.component';
import { FightLifeLoseComponent } from './components/fight/fight-life-lose/fight-life-lose.component';
import { FightManaLoseComponent } from './components/fight/fight-mana-lose/fight-mana-lose.component';
import { FightPoisonComponent } from './components/fight/fight-poison/fight-poison.component';
import { FightGoldComponent } from './components/fight/fight-gold/fight-gold.component';
import { FightSearchComponent } from './components/fight/fight-search/fight-search.component';
import { FightLootComponent } from './components/fight/fight-loot/fight-loot.component';
import { FightFleeComponent } from './components/fight/fight-flee/fight-flee.component';

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
    ExpCounterComponent,
    DungeonWildernessAComponent,
    DungeonWildernessBComponent,
    DungeonWildernessCComponent,
    DungeonWildernessDComponent,
    DungeonWildernessEComponent,
    MobTrollComponent,
    MapBookshelfComponent,
    SpellPlaceholderComponent,
    MenuBookshelfComponent,
    MenuHealerComponent,
    MenuSpellbookComponent,
    ManaCostComponent,
    ExpCostComponent,
    MenuInventoryComponent,
    OpenInventoryComponent,
    GoldCostComponent,
    ItemHealingStoneComponent,
    ItemPlaceholderComponent,
    ItemCounterComponent,
    ItemStackComponent,
    MobScrapsComponent,
    MobShadowComponent,
    NpcVillageChiefComponent,
    MenuVillageChiefComponent,
    QuestPlaceholderComponent,
    ShineComponent,
    ZoomInComponent,
    PopupRewardComponent,
    FightHitMobComponent,
    ActionPlaceholderComponent,
    FightLifeLoseComponent,
    FightManaLoseComponent,
    FightPoisonComponent,
    FightGoldComponent,
    FightSearchComponent,
    FightLootComponent,
    FightFleeComponent
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
