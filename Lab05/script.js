//write your script here
function resetTable() {
    change_tb_width('400px');
    change_tb_border('1px');
    change_tb_body_color('#d6cf0b');
}

function change_tb_width(width_number) {
    document.getElementById('tb').style.width = width_number;
}

function change_tb_border(border_number) {
    document.getElementById('tb').style.border = border_number + " solid black";
}

function change_tb_body_color(color_name) {
    document.getElementById('tb_body1').style.backgroundColor = color_name;
    document.getElementById('tb_body2').style.backgroundColor = color_name;
}