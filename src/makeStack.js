var makeStack = function (cid) {

    var inputArr = [.01, .05, .10, .25, 1.00, 5.00, 10.00, 20.00, 100.00]

    let cnt = 0
    for (var elem = 0; elem < inputArr.length; elem++) {
        //Pushing bill's numerical value onto end of bill array
        cid[elem].push(inputArr[elem])
    }

    return cid
}


module.exports = makeStack

