// Code your solution in this file!
function distanceFromHqInBlocks(x){
    return Math.abs(x-42)
}
function distanceFromHqInFeet(x){
    return (Math.abs(x-42))*264
}
function distanceTravelledInFeet(x,y){
return (Math.abs(x-y))*264
}
let fare=0
function calculatesFarePrice(x,y){
    let distFeet=(Math.abs(x-y))*264
    if(distFeet<=400){
        return fare=0
    }else if (distFeet>400 && distFeet<=2000){
        return fare=0.02*(distFeet-400)
    }else if (distFeet>2000 && distFeet<=2500){
        return fare=25
    }else{
        return(`cannot travel that far`)
    }
}
