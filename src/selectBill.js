module.exports = (stack, changeDue) => {
    
    //For each array in stack starting from the back:
    for (var i=stack.length-1; i >= 0; i--) {
        
        //if last item is less than or equal changeDue
        if (stack[i][2] <= changeDue) {
            
            //Splice selected bill array from stack
            var selectedBill = stack.splice(i,1)
             
            //Return selectedBill as a 1D array
            return selectedBill[0]
        }
    }
}