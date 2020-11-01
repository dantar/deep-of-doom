export class QuestItem {

    name: string;
    title: string;

    hook: string;

    request: string[];
    location: string;
    prepare: ()=>void;
    check: ()=>void;

    rewards: string[];
    next: string;

}