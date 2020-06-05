import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MazeMapComponent } from './components/maze-map/maze-map.component';


const routes: Routes = [
  {path: '', component: MazeMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
