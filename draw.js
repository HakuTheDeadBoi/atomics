let Draw = {};

Draw.all = function() {
    let html = "<table>";
    for (let i = 0; i < Board.length; i++) {
        html += "<tr>";
        for (let j = 0; j < Board[i].length; j++) {
            html += "<td>";
            html += Draw.atoms(Board[i][j]);
            html += "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";

    document.body.innerHTML = html;
}

Draw.atoms = function(count) {
    let result = "";

    for (let i = 0; i < count; i++) {
        result += "o";
    }

    return result;
}

Draw.getPosition = function(node) {
    if (node.nodeName != "TD") {return null;}

    let x = 0;
    while(node.previousSibling) {
        x++;
        node = node.previousSibling;
    }

    let y = 0;
    let row = node.parentNode;

    while(row.previousSibling) {
        y++;
        row = row.previousSibling;
    }

    return [x, y];
}