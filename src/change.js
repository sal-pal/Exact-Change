class Change {
    
    constructor(price, cash, cid) {
        
        this.changeDue = 0
        this.changeGiven = []
        this.constrOutcome = null
        
        
        var sumCID = 0
        for (var i=0; i < cid.length; i++) {
            sumCID += cid[i][1]
        }
        
        var change = cash - price
        
        if (change > sumCID) {
            this.constrOutcome = "Insufficient Funds"
        }
        else if (change === sumCID) {
            this.constrOutcome = "Closed"
        }
        else {
            this.changeDue = change
        }
        
    }
}   

module.exports = Change