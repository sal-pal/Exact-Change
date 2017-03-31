module.exports = function(billArr, chngeObj) {
    //Get the current bill's value
    var billValue = billArr[2]
    
    //Get total value (cumulative value) of the current billType
    var cumValue = billArr[1]
    
    //Push billArr to changeGiven without billVal
    chngeObj.changeGiven.push([billArr[0], 0])
    
    //Get last array from changeGiven
    var changeToGive = chngeObj.changeGiven[chngeObj.changeGiven.length-1]     
    
    //if changeDue is same size as cumValue
    if (chngeObj.changeDue === cumValue) {
        
        //Assign cumValue to changeGiven
        changeToGive[1] = cumValue
        
        //Make changeDue equal to zero
        chngeObj.changeDue = 0
    }
    
    //else if changeDue divisble by billValue and cumValue greater than changeDue
    else if (chngeObj.changeDue % billValue === 0 && cumValue > chngeObj.changeDue) {
        
        //Assign changeDue's value to changeGiven
        changeToGive[1] = chngeObj.changeDue
        
        //Make changeDue equal to 0
        chngeObj.changeDue = 0
    }
    
    //else if changeDue divisible by billValue and cumValue less than changeDue
    else if (chngeObj.changeDue % billValue === 0 && cumValue < chngeObj.changeDue) {
        
        //Assign cumValue to changeGiven
        changeToGive[1] = cumValue
        
        //Assign difference between changeDue and cumValue to changeDue
        chngeObj.changeDue = chngeObj.changeDue - cumValue
    }
    
    //else if changeDue not divisible by billValue and cumValue is greater than changeDue
    else if (chngeObj.changeDue % billValue !== 0 && cumValue > chngeObj.changeDue) {
        
        //Give greatest multiple of billValue that lies between 0 and changeDue
        var greatestMult = (Math.floor(chngeObj.changeDue / billValue)) * billValue
        
        //Give the change
        changeToGive[1] = greatestMult                                                                   
        
        //Update how much change is due
        chngeObj.changeDue -= greatestMult
    }
    
    //else if changeDue not divisible by billValue and cumValue less than changeDue
    else if (chngeObj.changeDue % billValue !== 0 && cumValue < chngeObj.changeDue) {
        //Assign cumValue to changeGiven
        changeToGive[1] = cumValue
        
        //Update how much change is due 
        chngeObj.changeDue -= cumValue
    }
}