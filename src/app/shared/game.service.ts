import { Injectable } from '@angular/core';
import { Tile, ITile } from './tile';

declare let GIXI: any;

@Injectable()
export class GameService {
  gameBoard: Array<ITile>;
  constructor() {}

generateUUID() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  };

 newGameBoard():  Array<ITile> {
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
