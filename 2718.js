var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = parseInt(lines.shift());

for (var i = 0; i < n; i++) {
    var x = parseInt(lines.shift());
    bits = [];
    while (x >= 2) {
        bits.push(x % 2);
        x = parseInt(x / 2);
    }
    bits.push(x);
    bits.reverse();

    var max = 1;
    if (bits.includes(1)) {
        var contador = 1;
        for (var j = 0; j < bits.length; j++) {
            if (bits[j] == 1) {
                if (bits[j] == bits[j + 1]) {
                    contador++;
                    max = Math.max(max, contador);
                }
            } else {
                contador = 1;
            }
        }
    } else {
        max = 0;
    }

    console.log(max);
}
