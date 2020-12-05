import { SharedDataService } from '../services/shared-data.service';

export class LandLocation {

    name: string;

    unlocked: (shared: SharedDataService) => boolean;

}