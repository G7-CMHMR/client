export function Objectfilter(object){
    let array=[]
    for (const property in object) {
        if (object[property]===true){
            array.push(property)
        }
      }return Math.max(...array)
    }