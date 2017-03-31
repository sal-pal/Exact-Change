let chai = require("chai")
let expect = chai.expect
let selectBill = require("../../src/selectBill")

describe("selectBill()", () => {
    var stack = [ 
        [ 'PENNY', 1.01, 0.01 ],
        [ 'NICKEL', 2.05, 0.05 ],
        [ 'DIME', 3.1, 0.1 ],
        [ 'QUARTER', 4.25, 0.25 ],
        [ 'ONE', 90, 1 ],
        [ 'FIVE', 55, 5 ],
        [ 'TEN', 20, 10 ],
        [ 'TWENTY', 60, 20 ],
        [ 'ONE HUNDRED', 100, 100 ] 
    ]

    it("", () => {
        expect(selectBill(stack, 80)).to.eql([ 'TWENTY', 60, 20 ])
    })
    it("", () => {
        expect(selectBill(stack, .25)).to.eql([ 'QUARTER', 4.25, 0.25 ])
    })
    it("", () => {
        expect(selectBill(stack, .04)).to.eql([ 'PENNY', 1.01, 0.01 ])
    })
    it("", () => {
        expect(selectBill(stack, .02)).to.eql([ 'PENNY', 1.01, 0.01 ])
    })
})