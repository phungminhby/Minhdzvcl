console.log("Hello from main.js");
// lây ô hiển thị
const display = document.getElementById("display"); //tạo biến display lấy giữ liệu từ id display
const buttons = document.querySelectorAll('.button button'); //tạo biến buttons quét toàn bộ giữ liệu từ nút button trong class .button

//lưu biến hiện tại dưới dạng chuỗi

let current = '';

//cập nhật hiện thị nếu rỗng hiện thị 0

function updateDisplay{
    display.value = current === '' ? '0' : current;
}