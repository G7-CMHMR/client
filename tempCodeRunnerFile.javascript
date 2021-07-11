let addpuntitos = function(num){
        let myFunc = num => Number(num);
        var intArr = Array.from(String(num), myFunc);
        let rta = [];
        while(intArr.length){
            intArr.length && rta.unshift(intArr.pop)
            intArr.length && rta.unshift(intArr.pop)
            intArr.length && rta.unshift(intArr.pop)
            intArr.length && rta.unshift(".")
        }
        return rta.join();
    }

    console.log(addpuntitos(10000))