var Prices = {
    rocket: 200,
    rocketPerKilo: .01
}

var Robot = {
    mass: 5000
}

var Energy = {
    mass: 1
}

var Metal = {
    mass: 4
}

function Turn() {
    this.number = 0;
    var now = Date();
    this.month = now.getMonth(); // 0=January
    this.year = now.getFullYear();
}

Turn.prototype.advance = function() {
    ++this.month;
    if (this.month > 11) {
        this.month = 0;
        ++this.year;
    }
}


function Game() {
    this.metal = 0;
    this.energy = 0;
    this.moneySpent = 0; // in millions
    this.turn = new Turn();
}

Game.prototype.endTurn = function()
{
    this.turn.advance();
}

Number.prototype.formatMoney = function(c, d, t){
    var n = this, 
        c = isNaN(c = Math.abs(c)) ? 2 : c, 
        d = d == undefined ? "." : d, 
        t = t == undefined ? "," : t, 
        s = n < 0 ? "-" : "", 
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
        j = (j = i.length) > 3 ? j % 3 : 0;
       return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
     };
