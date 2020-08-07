let figureManager = {

  createFigureOne: function(x, y, r) {
    let color = "yellow";
    switch (r) {
      case 1:
      case 3:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x+1, y, color);
        this.changeCubeColor(x, y+1, color);
        this.changeCubeColor(x+1, y+1, color);
        break;
      case 2:
      case 4:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x+1, y, color);
        this.changeCubeColor(x, y+1, color);
        this.changeCubeColor(x+1, y+1, color);
    }
  },

  createFigureTwo: function(x, y, r) {
    let color = "skyblue";
    switch (r) {
      case 1:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x--, --y, color);
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x-1, y, color);
        break;
      case 3:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x++, ++y, color);
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x+1, y, color);
        break;
      case 2:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(++x, y--, color);
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x, y-1, color);
        break;
      case 4:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(--x, y++, color);
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x, y+1, color);
     }
   },

  createFigureThree: function(x, y, r) {
      let color = "red"; // To do rotation
      switch (r) {
      case 1:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(++x, y, color);
        this.changeCubeColor(x+1, y, color);
        this.changeCubeColor(x+2, y, color);
        break;
      case 3:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(--x, y, color);
        this.changeCubeColor(x-1, y, color);
        this.changeCubeColor(x-2, y, color);
        break;
      case 2:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x, ++y, color);
        this.changeCubeColor(x, y+1, color);
        this.changeCubeColor(x, y+2, color);
        break;
      case 4:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x, --y, color);
        this.changeCubeColor(x, y-1, color);
        this.changeCubeColor(x, y-2, color);
      }
    },
  createFigureFour: function(x, y, r) {
      let color = "orange";
      switch (r) {
      case 1:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(++x, --y, color);
        this.changeCubeColor(x+1, y++, color);
        this.changeCubeColor(x, y, color);
        break;
      case 3:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x++, ++y, color);
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x, y+1, color);
        break;
      case 2:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(--x, y++, color);
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x-1, y, color);
        break;
      case 4:
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x--, --y, color);
        this.changeCubeColor(x, y, color);
        this.changeCubeColor(x, y-1, color);
      }
    },
  createFigureFive: function(x, y, r) {
        let color = "green";
        switch (r) {
        case 1:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x, --y, color);
          this.changeCubeColor(x-1, y, color);
          this.changeCubeColor(x+1, y, color);
          break;
        case 3:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(++x, y, color);
          this.changeCubeColor(x, y-1, color);
          this.changeCubeColor(x, y+1, color);
          break;
        case 2:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x, ++y, color);
          this.changeCubeColor(x+1, y, color);
          this.changeCubeColor(x-1, y, color);
          break;
        case 4:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(--x, y, color);
          this.changeCubeColor(x, y+1, color);
          this.changeCubeColor(x, y-1, color);
      }
    },
  createFigureSix: function(x, y, r) {
        let color = "Purple";
        switch (r) {
        case 1:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(++x, y++, color);
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x+1, y, color);
          break;
        case 3:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x, ++y, color);
          this.changeCubeColor(--x, y, color);
          this.changeCubeColor(x, y+1, color);
          break;
        case 2:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(--x, y, color);
          this.changeCubeColor(x, --y, color);
          this.changeCubeColor(x-1, y, color);
          break;
        case 4:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x++, --y, color);
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x, y-1, color);
        }
    },

  createFigureSeven: function(x, y, r) {
        let color = "grey";
        switch (r) {
        case 1:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x++, ++y, color);
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x+1, y, color);
          break;
        case 3:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x, --y, color);
          this.changeCubeColor(--x, y, color);
          this.changeCubeColor(x-1, y, color);
          break;
        case 2:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(--x, y++, color);
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x, y+1, color);
          break;
        case 4:
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(++x, y--, color);
          this.changeCubeColor(x, y, color);
          this.changeCubeColor(x, y-1, color);
      }
    },

  changeCubeColor: function(x, y, color) {
        let whole_line = y-1;
        let nth = whole_line*10 + x;
        let cube = game_field.querySelector('div:nth-child(' + nth + ')');
        cube.style.background = color;
    }
  }
