
{
const num_bth = document.querySelectorAll('.num_bth');
let output_sub = document.getElementById('output_sub');
const output_total = document.getElementById('output_total');
let total = 0;
//
num_bth.forEach(index => {
    index.addEventListener('click',() => {
        console.log(index.dataset.indexId);
        if(total === 0) {
            total = index.dataset.indexId;
        }else{
        total += index.dataset.indexId;
        }
        output_sub.textContent = total;
    });//click
});//forEach
//1~9 +-/*
//equal
const equal_btn = document.getElementById('equal_btn');
equal_btn.addEventListener('click',() => {
    console.log(eval(total));
    output_total.textContent = eval(total);
});
}