/**
	Output:
		A two-dimensional array representing the amount of change due.
		Change is represented by the amount needed of each bill type,
		e.g. quarters, nickels, dollar bills, etc. 

	Input:
		1) price (number): The price of the item.
		2) cash (number): The cash provided to pay for the item.
		3) cid (array): The amount of cash in the drawer when the 
				item is purchased. 
**/

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
