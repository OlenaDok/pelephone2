"use strict";
/*document.getElementById('collapsible1').rrr = function() {
    console.log('Checked state -' + this.checked);
    if (this.checked) {
        console.log('do smth');


    }
}*/

function displayData() {
    // Get the checkbox
    var checkBox = document.getElementById("collapsible");
    let x,y;
    // Get the output text
    var text = document.getElementById("cust-det-data");
    var arrow = document.getElementById("lbl-toggle-arr");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        console.log('do smth');
        text.style.display = "flex";
        y = 'rotate(-90deg) translateX(-15px)';
        arrow.style.transform = y;


    } else {
        text.style.display = "none";
        x = 0;
        arrow.style.transform = 'rotate(' + x + 'deg)';
    }
}


/*
function loadChart() {
    drawLineChart();
    console.log('drawLineChart in main');
    drawDonutChart();
    console.log('drawDonutChart in main');
}
*/
document.addEventListener('DOMContentLoaded', () =>
 // loadChart()
console.log('DOMContentLoaded')
);
console.log('main');
/*loadChart();
var divsMain = document.querySelectorAll('.bll-prd-select');
console.log('querySelectorAll ' + divsMain.length);
divsMain.
document.addEventListener("selectionchange1", function(){
    console.log('selectionchange');
    console.log(document.getSelection());
    loadChart();
});

document.getElementById("myBtn").addEventListener("click", function(){
    console.log('event');
   // console.log(document.getSelection());
    loadChart();});
*/
//bll-prd-select
