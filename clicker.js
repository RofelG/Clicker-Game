var total = 0;
var atotal = 0;

var vautoClick = 0;
var autoCost = 5;
var autoInterval = 100;

var vspeed = 0;
var speedCost = 100;

console.log('init complete');

function clickIt() {
    total++;
}

function autoClick() {
    atotal++;
    if (atotal >= (autoInterval - vspeed)) {
        total+=vautoClick;
        atotal = 0;
    }
}

function autoClickUp() {
    if (total >= autoCost) {
        document.getElementById('autoClick').style.visibility = 'visible';
        total -= autoCost;
        vautoClick++;
        if (autoCost < 100) {
            autoCost += 15;
        } else {
            autoCost = Math.floor(autoCost * 1.3);
        }
        document.getElementById('autoClick').innerHTML = "Level " + vautoClick;
        document.getElementById('autoBtn').innerHTML = "Auto Click (cost " + autoCost + ")";
    }
}

function speedBoost() {
    if (total >= speedCost) {
        document.getElementById('speed').style.visibility = 'visible';
        if (vspeed < 100) {
            vspeed++;
            total -= speedCost;
            console.log('vspeed');
            if (speedCost < 1000) {
                speedCost += 100;
            } else {
                speedCost = Math.floor(speedCost * 1.5);
            }
            document.getElementById('speedBtn').innerHTML = "Speed Boost (cost " + speedCost + ")";
        }
        document.getElementById('speed').innerHTML = vspeed + ' (max. 100)';
    }
}

function redraw() {
    autoClick();

    // if (total >= 1000) {
    //     ttotal++;
    //     total -= 1000;
    //     console.log('thousand');
    // }
    // if (ttotal >= 1000) {
    //     mtotal++;
    //     ttotal -= 1000;
    //     console.log('million');
    // }
    // if (mtotal >= 1000) {
    //     btotal++;
    //     mtotal -= 1000;
    //     console.log('billion');
    // }

    // if (btotal == 0) {
    //     if (mtotal == 0) {
    //         if (ttotal == 0) {
                document.getElementById('clickCount').innerHTML = total;
    //         } else {
    //             var i = appendzero(total);
    //             document.getElementById('clickCount').innerHTML = ttotal + "," + i;
    //         }
    //     } else {
    //         var h = appendzero(total);
    //         var i = appendzero(ttotal);
    //         document.getElementById('clickCount').innerHTML = mtotal + "," + i + "," + h;
    //     }
    // } else {
    //     var h = appendzero(total);
    //     var i = appendzero(ttotal);
    //     var j = appendzero(mtotal);
    //     document.getElementById('clickCount').innerHTML = btotal + "," + j + "," + i + "," + h;
    // }

    setTimeout(redraw, 10);
}

function appendzero(x) {
    console.log('append');
    if (x < 10) {
        return '00' + x;
    } else if (x < 100 && x >= 10) {
        return '0' + x;
    } else {
        return x;
    }
}