// *
// **
// ***
// ****
// *****
// ******

// initializing an empty variable to hold the graph and loop inside it 

/* var graph = '';

// use nested loops to right the rows frst and then inside each row, the second loop will write the column

for ( i = 1 ; i <= 6 ; i++) {
    for (j = 0; j < i ; j++) {
        graph += '* '
    }
    graph += "\n" ; // for going into a new line
}
alert(graph) ; */

var row = '' ;
function graph(row) {
    for ( i = 1 ; i <= 6 ; i++) {
        for (j = 0; j < i ; j++) {
            row += '* '
        }
        row += "\n" ;
    }
    return row ;
}
alert(graph(row));