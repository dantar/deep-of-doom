import { SharedDataService } from '../services/shared-data.service';

export class QuestItem {

    name: string;
    title: string;

    hook: string;

    trigger: (shared: SharedDataService)=>boolean;
    request: string[];
    location: string;
    prepare: (shared: SharedDataService)=>void;
    check: (shared: SharedDataService)=>boolean;

    thanks: string[];
    rewards: string[];

}

export class QuestData {

    active: string[];
    done: string[];
    rewarded: string[];

}