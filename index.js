// Conversion of Fahrenheit to Celsius
function convertFahrToCelsius(far) {
    let farNumber, result;
    farNumber = (far - 32)*(5/9);
    result = farNumber.toFixed(4);
    
    if(far === ""){
        return `${far} is not a valid number but an ${"empty value"}`;
    }
    else if (typeof far === "boolean") {
         return `${far} is not a valid number but a ${"boolean"}`;
    }
    else if (Array.isArray(far) === true) {
        return JSON.stringify(far) + " is not a valid number but an " +`${"array"}`;
    } 
    else if (!isNaN(far) === true) {
        return result;
    }
    else if(typeof far === "string"){
        return `${far} is not a valid number but a ${"string"}`;
    }
    
    else if (typeof far === "object") {
        return JSON.stringify(far) + " is not a valid number but an " +`${"object"}`
    }
    else {
        return result;
    }
}

//checkYuGiOh Challenge
function checkYuGiOh(n){
    let myArray = [];
    let newArray = [];
    if (!isNaN(n) === true) {
        
        for(let i = 1; i <= n; i++){
            myArray.push(i);
        }
        
        for(i = 0, len = myArray.length; i<len; i++) {
            if(myArray[i] % 2 === 0 || myArray[i] % 3 === 0 || myArray[i] % 5 === 0){
                let str = "";

                if(myArray[i] % 2 === 0){
                    str += "yu";
                } 
                if(myArray[i] % 3 === 0){
                    if (str != ""){
                        str += ("-gi")
                    }else{
                        str +=("gi")
                    }
                }
                if(myArray[i] % 5 === 0){
                    if (str != ""){
                        str += ("-oh")
                    }else{
                        str +=("oh")
                    }
                }
                newArray.push(str);
              
            } else{
               newArray.push(myArray[i]);
            }
        }        
    }else{
        console.log(`invalid parameter: ` + `${JSON.stringify(n)}`);
        return (`invalid parameter: ` + `${JSON.stringify(n)}`);
    };
    console.log(newArray);
    return newArray;
};

