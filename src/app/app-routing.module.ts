import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePlayComponent } from './components/game-play/game-play.component';


const routes: Routes = [
  {path: '', component: GamePlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
