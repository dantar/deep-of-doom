import { WizardHero } from './hero.model';
import { MazeMap, MazeMobs, MazeExploration, MazeRooms, MazeData } from './maze-map.model';
import { QuestData } from './quest.model';

export class SavedData {

    hero: WizardHero;    
    maze: MazeData;
    quests: QuestData;
  
}