export interface ITile {
  id?: string;
  isRevealed?: boolean;
  isMatched?: boolean;
  pattern?: any;
  xPos?: any;
  yPos?: any;
  points?: number;
}

export class Tile {
    tile: ITile;
    constructor(tile: ITile) {
        this.tile.id = tile.id;
        this.tile.isRevealed = false;
        this.tile.isMatched = false;
        this.tile.pattern = tile.pattern;
        this.tile.xPos = tile.xPos;
        this.tile.yPos = tile.yPos;
        this.tile.points = tile.points;
    }
}

