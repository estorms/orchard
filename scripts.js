console.log('scripts connected')
// var intervalID = window.setInterval(myCallback, 500);


var Plant = function () {
 this.height = 1;
}


var Tree = function () {
this.branches = 1;
}

Tree.prototype = new Plant();

Plant.prototype.increaseHeight = function (amount) {
this.height = this.height  + amount;
}

Plant.prototype.decreaseHeight = function (amount) {
this.height = this.height - amount;
}

Tree.prototype.grow = function (amount) {
    this.height = this.height + amount;
    if(amount >= 10 && amount % 10 === 0) {
        this.branches = this.branches + 1
    }
}

Tree.prototype.trim = function (amount) {
    this.height = this.height - amount;
    this.branches = this.branches - 1;
}

var PearTree = new Tree();
var OakTree = new Tree();




// var GrowMe = (function () {
// for (var i = 0; i <= 5; i++) {
//     window.setInterval(function(){
//         DOMprintPear(PearTree, 10)
//         }, 2000);
// };

// })
// (GrowMe || {})

function DOMprintPear (obj, amt) {
    obj.grow(amt);
    $('#output').append(`<p>Your pear tree is ${obj.height} cm tall and has ${obj.branches} branches.</p>`);
}


