let buttons = document.querySelectorAll('button');

document.addEventListener("keydown", function(){
  switch (event.code) {
    case "ArrowLeft":
      console.log("left key pressed");
      break;
    case "ArrowRight":
      console.log("right key pressed");
      break;
    case "ArrowDown":
      console.log("down key pressed");
      break;
    case "Space":
      console.log("Space key pressed");
      break;
  }
});

/*for (let i=0; i < 200; i++) {
  game_field.appendChild(
    emptyDiv.cloneNode()
  );

  document.getElementsById('example-field').appendChild(
    document.createElemenet('div')
  );
}*/
//if функция делает цикл в своей же функции

let figureManager = {
 game_field: null,
  x: 0,
  y: 0,
  state: true,
   figureFall: function(y){ // figurefall рекрусивная функция запускает функцию по новому.
     let obj = this; // this Это тот же самый figureManager
     setTimeout(function(){
       //alert("Hello");
         if(obj.state){
           //obj.createFigureOne(2, y++, 1)
           //obj.createFigureTwo(5, y++, 1)
           //obj.createFigureThree(3, y++, 1)
           //obj.createFigureFour(5, y++, 2)
           obj.createFigureFive(5, y++, 1)
           //obj.createFigureSix(3, y++, 1)
           //obj.createFigureSeven(3, y++, 1)
           obj.figureFall(y); // Вызывает функцию figureFall: function(y) которая вызывает figureManager.figureFall(0);
       }
     }, 300);
   },

  createFigureOne: function (x, y, r) {
    let color = "";
      switch (r) {
      case 1:
        console.log(" y = " + y + ", this.y = " + this.y);
        for (let n = 1; n <= 2; n++) {
          if (n == 2) // ФОрмула с for для выполнения кол-ва цикла  ниже.
          {
            color = "yellow";
          }
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x, this.y-1, color);
          this.changeCubeColor(++this.x, this.y--, color);
          this.changeCubeColor(this.x, this.y, color);
          this.y = y;
          this.x = x;
        }
    }
  },

  createFigureTwo: function(x, y, r) {
      let color = "";
      for (let n = 1; n <= 2; n++) {
        if (n == 2) {
          color = "skyblue";
        }
        let coords = [
          [this.x, this.y],
          [++this.x, this.y],
          [this.x+1, this.y],
          [this.x+2, this.y]
        ];
        switch (r) {
        case 1:
        if (n == 2) {
          this.validate(coords);
          }
        for (coord of coords) {
          this.changeCubeColor(coord[0], coord[1], color);
        }
        break;
        case 3:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x++, ++this.y, color);
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x+1, this.y, color);
          break;
        case 2:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(++this.x, this.y--, color);
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x, this.y-1, color);
          break;
        case 4:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(--this.x, this.y++, color);
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x, this.y+1, color);
      }
      this.y = y;
      this.x = x;
     }
   },

  createFigureThree: function(x, y, r) {
    let color = ""; // To do rotation
    for (let n = 1; n <= 2; n++) {
      if (n == 2) {
        color = "red";
      }
      let coords = [
        [this.x, this.y],
        [++this.x, this.y],
        [this.x+1, this.y],
        [this.x+2, this.y]
      ];
    switch (r) {
    case 1:
    if (n == 2) {
      this.validate(coords);
      }
    for (coord of coords) {
      this.changeCubeColor(coord[0], coord[1], color);
    }
      break;
    case 3:
      this.changeCubeColor(this.x, this.y, color);
      this.changeCubeColor(--this.x, this.y, color);
      this.changeCubeColor(this.x-1, this.y, color);
      this.changeCubeColor(this.x-2, this.y, color);
      break;
    case 2:
      this.changeCubeColor(this.x, this.y, color);
      this.changeCubeColor(this.x, ++this.y, color);
      this.changeCubeColor(this.x, this.y+1, color);
      this.changeCubeColor(this.x, this.y+2, color);
      break;
    case 4:
      this.changeCubeColor(this.x, this.y, color);
      this.changeCubeColor(this.x, --this.y, color);
      this.changeCubeColor(this.x, this.y-1, color);
      this.changeCubeColor(this.x, this.y-2, color);
    }
    this.y = y;
    this.x = x;
    }
  },
createFigureFour: function(x, y, r) {
    let color = "";
    for (let n = 1; n <= 2; n++) {
      if (n == 2) {
        color = "orange";
      }
      let coords = [];
      coords = [
        [this.x, this.y],
        [++this.x, this.y],
        [this.x+1, this.y],
        [this.x+2, this.y]
      ];
      switch (r) {
        case 1:
        case 3:
        coords = [
          [this.x, this.y],
          [this.x, --this.y],
          [++this.x, this.y],
          [this.x, --this.y]
        ];
        break;
        case 2:
        case 4:
        coords = [
          [this.x, this.y],
          [--this.x, this.y],
          [this.x, --this.y],
          [--this.x, this.y]
        ];
        break;
    }
    if (n == 2) {
      this.validate(coords);
      }
    for (coord of coords) {
      this.changeCubeColor(coord[0], coord[1], color);
    }
    this.y = y;
    this.x = x;
    }
},
  createFigureFive: function(x, y, r) {
        let color = "";
        for (let n = 1; n <= 2; n++) {
          if (n == 2) {
            color = "green";
          }
          let coords = [];
          switch (r) {
            case 1:
            coords = [
              [this.x, this.y],
              [++this.x, this.y],
              [this.x, this.y-1],
              [this.x, this.y+1]
            ];
            break;
            case 3:
            coords = [
              [this.x, this.y],
              [this.x, --this.y],
              [this.x-1, this.y],
              [this.x+1, this.y]
            ];
            break;
            case 2:
            coords = [
              [this.x, this.y],
              [this.x, ++this.y],
              [this.x-1, this.y],
              [this.x+1, this.y]
            ];
            break;
            case 4:
            coords = [
              [this.x, this.y],
              [--this.x, this.y],
              [this.x, this.y+1],
              [this.x, this.y-1]
            ];
            break;
        }
        if (n == 2) {
          this.validate(coords);
          }
        for (coord of coords) {
          this.changeCubeColor(coord[0], coord[1], color);
      }
      this.y = y;
      this.x = x;
      }
    },
  createFigureSix: function(x, y, r) {
        let color = "";
        for (let n = 1; n <= 2; n++) {
          if (n == 2) {
            color = "purple";
          }
        switch (r) {
        case 1:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(++this.x, this.y++, color);
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x+1, this.y, color);
          break;
        case 3:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x, ++this.y, color);
          this.changeCubeColor(--this.x, this.y, color);
          this.changeCubeColor(this.x, this.y+1, color);
          break;
        case 2:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(--this.x, this.y, color);
          this.changeCubeColor(this.x, --this.y, color);
          this.changeCubeColor(this.x-1, this.y, color);
          break;
        case 4:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x++, --this.y, color);
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x, this.y-1, color);
        }
        this.y = y;
        this.x = x;
        }
    },

  createFigureSeven: function(x, y, r) {
        let color = "";
        for (let n = 1; n <= 2; n++) {
          if (n == 2) {
            color = "grey";
          }
        switch (r) {
        case 1:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x++, ++this.y, color);
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x+1, this.y, color);
          break;
        case 3:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x, --this.y, color);
          this.changeCubeColor(--this.x, this.y, color);
          this.changeCubeColor(this.x-1, this.y, color);
          break;
        case 2:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(--this.x, this.y++, color);
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x, this.y+1, color);
          break;
        case 4:
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(++this.x, this.y--, color);
          this.changeCubeColor(this.x, this.y, color);
          this.changeCubeColor(this.x, this.y-1, color);
      }
      this.y = y;
      this.x = x;
      }
    },


  changeCubeColor: function(x, y, color, r) {
        if (y == 20) {
          this.state = false;
        }

        let whole_line = y-1;
        let nth = whole_line*10 + x;
        let cube = this.game_field.querySelector('div:nth-child(' + nth + ')');

        if (y < 1 || y > 20 || x < 1 || x > 10 ) {
          return;
        }

        if (color == '') {
          cube.classList.remove('colored');
        }
        else {
        cube.classList.add('colored');
        }
        cube.style.background = color;
    },
    resetObject: function () {
      this.x = 0;
      this.y = 0;
      this.state = true;
    },
    validate: function(coords) {
      console.log(coords)
      for (coord of coords) {
        let x = coord[0],
            y = coord[1]+1;
        if (y < 1 || y > 20 || x < 1 || x > 10 ) {
          return;
        }
        let whole_line = y-1;
        let nth = whole_line*10 + x;
        let cube = this.game_field.querySelector('div:nth-child(' + nth + ')');

        if (cube.classList.contains('colored')) {
          this.state = false;
          return;
        }
      }
    }
  }
