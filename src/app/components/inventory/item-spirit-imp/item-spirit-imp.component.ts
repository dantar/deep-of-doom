import { Component, Input, OnInit } from '@angular/core';
import { HeroEquipment, HeroItem } from 'src/app/models/hero.model';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { ItemsLoreService } from 'src/app/services/items-lore.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-item-spirit-imp]',
  templateUrl: './item-spirit-imp.component.html',
  styleUrls: ['./item-spirit-imp.component.scss']
})
export class ItemSpiritImpComponent implements OnInit {

  @Input() item: HeroEquipmentSpiritImp;

  constructor(private games: GamesCommonService) { }

  tags: string[];

  patterns: {[pattern:string]: CssPattern};

  ngOnInit(): void {
    this.tags = ['impBody', 'impHead'];
    this.tags.push(`impArmL${this.item.arms}`);
    this.tags.push(`impArmR${this.item.arms}`);
    this.tags.push(`impLegL${this.item.legs}`);
    this.tags.push(`impLegR${this.item.legs}`);
    this.tags.push(`impTail${this.item.tail}`);
    this.tags.push(`impWings${this.item.wings}`);
    this.tags.push(`impEarR${this.item.ears}`);
    this.tags.push(`impEarL${this.item.ears}`);
    this.tags.push(`impFace${this.item.face}`);
    if (this.item.horns > 1) {
      this.tags.push(`impHornL${this.item.crown}`);
      this.tags.push(`impHornR${this.item.crown}`);
    }
    if ([1,3].includes(this.item.horns)) {
      this.tags.push(`impHornC${this.item.crown}`);
    }
    if (this.item.eyes > 1) {
      this.tags.push(`impEye2`);
    }
    if ([1,3].includes(this.item.eyes)) {
      this.tags.push(`impEye1`);
    }
  }

  cssFor(c: string): {[id:string]: boolean} {
    let pattern = this.games.randomInt(1,2);
    let i = {
      impBody: 'pbody',
      impTail: 'pbody',
      impFace: 'pbody',
      impEarR: 'pbody',
      impEarL: 'pbody',
      impArmL: 'parms',
      impArmR: 'parms',
      impLegL: 'plegs',
      impLegR: 'plegs',
      impWings: 'pwings',
      impHornL: 'phorns',
      impHornC: 'phorns',
      impHornR: 'phorns',
      impEye: 'peyes',
    };
    let result = {};
    result[`pattern${this.item[i[c.replace(/[0-9]/, '')]]}`] = true;
    return result;
  }

  shown(c: string): boolean {
    return this.tags.includes(c);
  }

}

class CssPattern {
  fill: string;
  stroke: string;
}

class HeroEquipmentSpiritImp extends HeroEquipment {

  arms: number;
  legs: number;
  tail: number;
  wings: number;
  face: number;
  eyes: number;
  horns: number;
  crown: number;
  ears: number;

  pbody: number;
  parms: number;
  peyes: number;
  plegs: number;
  pwings: number;
  phorns: number;

}

ItemsLoreService.registerItem({
  name: 'spiritImp',
  title: 'Spirito IMP',
  traits: [],
  factory: (shared: SharedDataService) => {
    return {
      name:'spiritImp', 
      arms: GamesCommonService.randomInt(1,3),
      legs: GamesCommonService.randomInt(1,4),
      tail: GamesCommonService.randomInt(1,4),
      wings: GamesCommonService.randomInt(1,4),
      face: GamesCommonService.randomInt(1,3),
      eyes: GamesCommonService.randomInt(1,3),
      horns: GamesCommonService.randomInt(1,3),
      crown: GamesCommonService.randomInt(1,3),
      ears: GamesCommonService.randomInt(1,3),
      pbody: GamesCommonService.randomInt(1,5),
      parms: GamesCommonService.randomInt(1,5),
      peyes: GamesCommonService.randomInt(1,5),
      plegs: GamesCommonService.randomInt(1,5),
      pwings: GamesCommonService.randomInt(1,5),
      phorns: GamesCommonService.randomInt(1,5),
    } as HeroEquipmentSpiritImp
  },
  triggers: {},
});
