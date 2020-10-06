import { WizardHero } from './hero.model';
import { MazeMap, MazeMobs, MazeExploration, MazeRooms } from './maze-map.model';

export class SavedData {

    hero: WizardHero;
    
    maze?: MazeMap;
    mobs?: MazeMobs;
    rooms?: MazeRooms;
    exploration?: MazeExploration;
  
}