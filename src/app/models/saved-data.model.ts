import { WizardHero } from './hero.model';
import { MazeMap, MazeMobs, MazeExploration } from './maze-map.model';

export class SavedData {

    hero: WizardHero;
    
    maze?: MazeMap;
    mobs?: MazeMobs;
    exploration?: MazeExploration;
  
}