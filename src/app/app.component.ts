import { Component, OnInit } from '@angular/core';
import { BoardComponent } from './board';
import { GameService } from './shared';
declare let GIXI: any;

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BoardComponent],
  providers: [GameService]
})

export class AppComponent implements OnInit {
  title = 'app works!';
  history: Array<any> = [];
  gameTiles: any;
  firstItemSelected: boolean = false;
  secondItemSelected: boolean = false;
  firstTile: any;
  secondTile: any;

  selectTile() {
    console.log('tile');
  }

  onNotify(message: any): void {
    console.log('notify', message);
    if (this.firstItemSelected) {
      // this.gameService.secondTileSelected(event);
     this.secondTile = message;
      this.secondItemSelected = true;
      // console.log('secondItem', this.secondItem);
      this.firstItemSelected = false;
      // console.log('match!!!', this.checkForMatch(this.firstItem, this.secondItem));
      return;
    }
    this.secondTile = message;
    this.firstItemSelected = true;
    // console.log('firstItem', this.firstItem);
    this.history.push(`${message.id} tile selected`);

    // this.gameService.checkForMatch(tile1, tile2);
  };

  ngOnInit() {
    this.gameTiles = this.gameService.newGameBoard();
  }

  constructor(private gameService: GameService) {

  }
}
