let chai = require("chai")
let expect = chai.expect
let Change = require("../../src/change")
let giveBill = require("../../src/giveBill")


describe("giveBill", () => {
    it("should assign cumVal to changeGiven when both quantities are equal", () => {
        var change = new Change(20, 80, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
        giveBill(["TWENTY", 60.00, 20], change)
        //How to get last 2nd item in changeDue array
        expect(change.changeGiven[0][1]).to.equal(60)
        expect(change.changeDue).to.equal(0)
    })

    it("should give the needed amount of change from drawer of this bill type.", () => {
        var change = new Change(20, 80, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
        giveBill(["TWENTY", 80.00, 20], change)
        expect(change.changeGiven[0][1]).to.equal(60)
        expect(change.changeDue).to.equal(0)
    })
    
    it ("should give amount needed when all change can't be given with current billType", () => {
        //What is everything we expect this part to do? Given a range of inputs, what are all desired outputs?
        var change = new Change(20, 80, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
        giveBill(["TWENTY", 40.00, 20], change)
        expect(change.changeGiven[0][1]).to.equal(40)
        expect(change.changeDue).to.equal(20)
    })
    //Semantics is solid
    it ("should return as much change as possible when we cannot give exact change with given billType", () => {
        //
        var change = new Change(20, 90, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
        giveBill(["TWENTY", 80.00, 20], change)
        expect(change.changeGiven[0][1]).to.equal(60)
        expect(change.changeDue).to.equal(10)
    })
    
    it ("should return change that is the greatest mulitple of billValue that is less than cumValue", () => {
        var change = new Change(20, 90, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
        giveBill(["TWENTY", 60.00, 20], change)
        expect(change.changeGiven[0][1]).to.equal(60)
        expect(change.changeDue).to.equal(10)
    })
})