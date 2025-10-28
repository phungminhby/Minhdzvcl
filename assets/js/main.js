console.log("Hello from main.js");

// Lấy ô hiển thị
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn, .equal, .zero");
let currentValue = "";

// Lặp qua từng nút
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    console.log(value);

    switch (value) {
      case "AC":
        currentValue = "0";
        display.value = "";
        break;

      case "C":
        currentValue = currentValue.slice(0, -1) || "";
        display.value = currentValue;
        break;

      case "=":
        try {
          // Không hiển thị dấu "=" — chỉ hiện kết quả
          const result = eval(currentValue.replace(/X/g, "*"));
          currentValue = result.toString();
          display.value = currentValue;
        } catch {
          display.value = "Err";
          currentValue = "";
        }
        break;

      default:
        // Nếu đang là 0 và bấm số khác → thay luôn chứ không nối
        if (currentValue === "0") currentValue = value;
        else currentValue += value;
        display.value = currentValue;
        break;
    }
  });
});
