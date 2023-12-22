let arr1 = [53, -3, 0, 1, -15, 0];
let arr2 = [11, -6, 34, -19, 4, -24];
let arrNew = [];
if (arr1.length == arr2.length){
    for (let i = 0; i <= arr1.length-1; i++){
        arrNew.push(Math.max(arr1[i], arr2[i]));
    } 
    alert(arrNew);
}
else {
    alert('Длины arr1 и arr2 не равны');
}