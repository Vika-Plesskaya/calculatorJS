(function () {
    var buttons = document.querySelectorAll(".btn"),
        length = buttons.length,
        memory = document.getElementById("memory-input"),
        input = document.getElementById("calc-input"),
        operations = {
            "equal": function () {
                if (!input.value || !memory.innerHTML) {
                    return;
                }
                input.value = eval(memory.innerHTML + input.value);
                memory.innerHTML = "";
            },
            "negate": function () {
                input.value = -input.value;
            },
            "sqrt": function () {
                if (input.value < 0 || isNaN(Math.sqrt(input.value))) {
                    alert("Sorry, wrong operation was used");
                } else {
                    input.value = Math.sqrt(input.value);
                }
            },
            "delete": function () {
                input.value = input.value.slice(0, -1);
            },
            "clear": function () {
                input.value = "";
                memory.innerHTML = "";
            },
            "+": operate_math,
            "-": operate_math,
            "/": operate_math,
            "*": operate_math,
            ".": add_decimal,
            "1": add_num,
            "2": add_num,
            "3": add_num,
            "4": add_num,
            "5": add_num,
            "6": add_num,
            "7": add_num,
            "8": add_num,
            "9": add_num,
            "0": add_num
        };

    function operate_math(operation) {
        if (!input.value) {
            return;
        }
        memory.innerHTML = memory.innerHTML + input.value + operation;
        input.value = "";
    };

    function add_num(num) {
        input.value += num;
    };

    function add_decimal(decimal) {
        if (decimal === "." && input.value.indexOf(".") >= 0) {
            return;
        }
        input.value += decimal;
    };

    function btn_click() {
        var btn = this.value ? this.value : this.innerHTML;
        operations[btn](btn);
    };

    for (var i = 0; i < length; i++) (function (index) {
        buttons[index].addEventListener("click", btn_click, false);
    })(i);

})();