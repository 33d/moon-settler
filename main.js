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
