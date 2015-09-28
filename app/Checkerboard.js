var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];
function setSquare(player, row, col) {
    checkerboard [row][col] = player;
}

function getPieceAt(row, col) {
    return checkerboard [row][col];
}

function clearBoard () {
    for (var i = 0; i < checkerboard.length; i += 1) {
        checkerboard.push(setSquare(null, row, col));
    }
        return checkerboard;
}


function setUpRed()
{
    for (j=0; j<3; j++) {
        for (i=0; i<8; i++) {
            if ((j+1)%2===0) {
                if ((i+1)%2===0)
                   checkerboard[j][i] = 'R';
                else
                   checkerboard[j][i] = null;
            }
            else {
                if ((i+1)%2!==0)
                    checkerboard[j][i] = 'R';
                else
                    checkerboard[j][i]= null;
            }
        }
    }
}
function setUpBlack()
{
    for (var j = (checkerboard.length-1); j>=5; j-=1) {
        for (var i = (checkerboard.length - 1); i >= 0; i -= 1) {
            if ((j+1)%2===0) {
                if ((i+1)%2===0)
                   checkerboard[j][i] = 'B';
                else
                   checkerboard[j][i] = null;
            }
            else {
                if ((i+1)%2!==0)
                    checkerboard[j][i] = 'B';
                else
                    checkerboard[j][i]=null;
            }
        }
    }
}
setUpRed();
setUpBlack();
console.log(checkerboard);

var pieces = {
    'red' : [[0,0],[0,2],[0,4],[0,6],[1,1],[1,3],[1,5],[1,7],[2,0],[2,2],[2,4],[2,6] ],
    'black' : [[5,1],[5,3],[5,5],[5,7],[6,0],[6,2],[6,4],[6,6],[7,1],[7,3],[7,5],[7,7]]
    };

  pieces.red.map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'R';
    });

  pieces.black.map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'B';
    });
    
