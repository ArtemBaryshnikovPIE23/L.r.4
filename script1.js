let N = Number(prompt());
let arr = [];
if (N > 0){
    for (let i = 0; i <= N; i++){
        if (i % 2 == 1){
            arr.push(i);
        }   
    }
    alert(arr);
}
else {
    alert('Error');
}