module.exports = function (price, cash, cid) {    
       
    let Change = require("./change")
    let makeStack = require("./makeStack")
    let giveBill = require("./giveBill")
    let selectBill = require("./selectBill")

    var change = new Change(price, cash, cid)
    
    //If either insufficient money in drawer or all money in drawer given as change
    if (typeof(change.constrOutcome) === "string") {
        return change.constrOutcome
    }
    
    //Get the stack ready to be searched through
    var stack = makeStack(cid)
    
    //while there is still change due
    while (change.changeDue > 0) {
        
        //Make changeDue have only 2 decimal places
        change.changeDue = Number((change.changeDue.toFixed(2)))
        
        //Select a billType to hand out
        var billType = selectBill(stack, change.changeDue)
        
        //Hand out change of the selected billType
        giveBill(billType, change)                                         
    
    }
    //Return all change given at end of algorithm
    return change.changeGiven
}