import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import {GameService, Tile, ITile} from '../shared';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'app-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css'],
  providers: [GameService]
})
export class BoardComponent implements OnInit, OnDestroy {
  @Input() gameTiles: any;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  subscription: Subscription;

  // @Output() tileSelected = new EventEmitter();
  firstItemSelected: boolean = false;
  secondItemSelected: boolean = false;

  cover: any = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAdVBMVEX///9CPj/k4+MhHR4gHB0iHh/g394+Ojn6+vr8/Pz19fWamJjb2tqNi4skISKFg4Olo6OzsrLp6eldWluhoKBST0+TkZHW1dVKR0dyb2/NzMx8enoqJyhjYWI6NjesqqoxLi9OS0vFxMRraGhgXVx4dne4t7fPcN26AAADHklEQVRIiZWW27ajIAyGwYDjCRQVK63Wdti77/+IE6wHsO1anVy1wmfin5BACIlKTb80LWqCdm7Mo4i+skKZnxP6aLqMfG2ZGCNS/r4l0iRJ3zK2I/pxfJoUU3kx42gu5VQkx1WlCS3CR1E+XiVbTF5tHoXrBSU0eBQJyhkw4FxKzvEH470IdsR/AiSZekC7NaKalJoq0dzc//uUfEKiywAgdX7eBMnO+V1yGC71e6RogEPf7quz1S3FMH/id0ihgcvfmLxYYdBRE78iEfoY8j2kbE9X1g0cxvqIJBck2nQNxuh7Y/L1zWmLzCU5INPAZb4QD80ZysuAVotUaSf5oEIkRnXXynlcGcekcCeVWJjMoNZRgAiAfgnjRBluRpVQDT5MqwYUoPORiIJsl8ULErLJq8pirNCvguYSaOwhOQe9KBJRjMnUs1AuvNVNjTmodiQZGc+XpcfA+e383NWDfEbzjJ3ZZEOKKyy7CGnxI/RTiAxfzMoVOd/gWmzIJFmzZq7Dmm+S1aHnJWuYVBtSMhDrirLWdi5B6YOiZFKtC6gLbzcE/1TrQurMfUh5A4ne9yoVzEX5RFLDNmG2yLXLJaPn/VHFmUlXZGSe/zVwVwHaI4iSbEw+I38Hl3oRnB0fIa+BTehCdmFb8gMLPn9BMO/Xw3HzPz8QeUOgPxzpQGQ/lR+RMJWxVzAbwg5IWDCJZZAH60VVVSpsrliWZi9LrEW4HyI/WnQPip9E/X7EZvtrjCmDz+v487htB7kDTk/ehgrrmfp+T9gA59g3BN2C8d5aoWI+klkAHbaLuSl52T54ScVrU8LWx/fWh4qWZbm3ziTH010eWx+pR2yX78dmJrBZ2pcGi7+xKUtbvBIni33tZ9vmD4sY/QDND/mJOjcs7L4rGEl1iSOJ34U/kkSP2g3lh5GEn6k0nwffr6iUqsRvc2P4Ev34OPhcGHnvxitjbrwy1/9lH85khxyH+GSu8+6Zu5rpMMRPlOjDqXdXBdWWZrRGtCp+uSpMmgjz/gqTvr2PzBeSehT/de1xKT2NVn19ubLPXEfd91e4Dn38Axo5MsJaP50jAAAAAElFTkSuQmCC`;

  tileSelected(tile: any) {
    this.notify.emit(tile);
  }

  constructor(public gameService: GameService) { }

  iconSelected(event: any) {
    // this.gameService.selectTile(event);
    // console.log(event);
    // this.tileSelected.emit(event);
    //   if (this.firstItemSelected) {
    //     this.gameService.secondTileSelected(event);
    //     // this.secondItem = event;
    //     this.secondItemSelected = true;
    //     // console.log('secondItem', this.secondItem);
    //     this.firstItemSelected = false;
    //     // console.log('match!!!', this.checkForMatch(this.firstItem, this.secondItem));
    //     return;
    //   }
    //   // this.firstItem = event;
    //   this.gameService.firstTileSelected(event);
    //   this.firstItemSelected = true;
    //   // console.log('firstItem', this.firstItem);
  };

  // ngAfterViewInit() {

  //   // this.gameBoard = this.gameTiles;
  //   // this.gameBoard = this.gameService.newGameBoard();
  //   // this.gameService.tileSelected.subscribe(x => {
  //   //   console.log('x, ngAfterViewInit', x);
  //   // });
  // }

  ngOnInit() {
    // this.gameBoard = this.gameTiles;
    console.log('ngOnInit: ', this.gameTiles);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
