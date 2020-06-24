/*document.getElementById('collapsible1').rrr = function() {
    console.log('Checked state -' + this.checked);
    if (this.checked) {
        console.log('do smth');


    }
}*/

function displayData() {
    // Get the checkbox
    var checkBox = document.getElementById("collapsible");

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
