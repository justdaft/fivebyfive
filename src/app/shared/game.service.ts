import { Injectable, EventEmitter, Output} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import { Tile, ITile } from './tile';

declare let GIXI: any;

@Injectable()
export class GameService {
  // @Output() tileSelected = new EventEmitter();

  // Observable string sources
  private tileSelectedSource = new Subject<any>();
  // private firstTileSelectedSource = new Subject<any>();
  // private secondTileSelectedSource = new Subject<any>();

  // Observable string streams
  tileSelected$ = this.tileSelectedSource.asObservable();
  // firstTileSelected$ = this.firstTileSelectedSource.asObservable();
  // secondTileSelected$ = this.secondTileSelectedSource.asObservable();

  gameBoard: Array<ITile>;

  constructor() { }

  tileSelected(tile: any) {
    // console.log('tileSelected', tile);
    this.tileSelectedSource.next(tile);
  }

  // Service message commands
  // firstTileSelected(tile: any) {
  //   console.log('firstTileSelected', tile);
  //   this.firstTileSelectedSource.next(tile);
  // }

  // secondTileSelected(tile: any) {
  //   console.log('secondTileSelected', tile);
  //   this.secondTileSelectedSource.next(tile);
  // }

  // selectTile(event: any) {
  //   // console.log('GameService, selectTile:', event);
  //   this.tileSelected.emit(event);
  // }

  generateUUID() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  };

  newGameBoard(): Array<ITile> {
    this.gameBoard = [];
    for (let x = 0; x < 12; x++) {
      let imgData = new GIXI(50).getImage();
      let tmpObj: ITile = {
        id: this.generateUUID(),
        pattern: imgData,
        isMatched: false,
        isRevealed: (Math.random() < 0.5),
        xPos: x % 5,
        yPos: Math.floor(x / 5),
        points: 1
      };
      this.gameBoard.push(tmpObj);
      this.gameBoard.push(tmpObj);
      // this.imgSource.push(new GIXI(50).getImage(););
    }
    let tmpObjX: ITile = {
      id: 'super',
      pattern: new GIXI(50).getImage(),
      isMatched: false,
      isRevealed: (Math.random() < 0.5),
      xPos: 0,
      yPos: 0,
      points: 10
    };
    this.gameBoard.push(
      tmpObjX
    );

    console.log(this.gameBoard);
    return this.gameBoard;
  }

}
