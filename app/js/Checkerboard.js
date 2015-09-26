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
        checkerboard [i][i] = null;
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
                    checkerboard[j][i]=null;
            }
        }
    }
}