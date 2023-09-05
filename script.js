function lev1_1_1() {
    var p = document.querySelector('.inp.inp1_1_1').value;
    var answer = document.getElementById('ex1_1_1');
    answer.innerText = p.slice(-1);
};


function lev1_1_2() {
    var p = document.querySelector('.inp.inp1_1_2').value;
    var answer = document.getElementById('ex1_1_2');
    answer.innerText = p.length;
};


function lev1_2_1() {
    var p = document.querySelector('.inp.inp1_2_1').value;
    var answer = document.getElementById('ex1_2_1');
    var first = parseInt(p[0]);
    var last = parseInt(p.slice(-1));
    answer.innerText = first + last;
};


function lev1_4_1() {

    var answer = document.getElementById('ex1_4_1');
    var str = '';
    for (var i = 1; i <= 100; i++) {
        if (i == 100) {
            str += i;
        } else {
            str += i + ', ';
        }
    }
    answer.innerText = str;
};



function lev1_4_2() {

    var answer = document.getElementById('ex1_4_2');
    var str = '';
    for (var i = 2; i <= 100; i++) {
        if (i % 2 == 0) {
            if (i == 100) {
                str += i;
            } else {
                str += i + ', ';
            }

        }
    }
    answer.innerText = str;
};


function lev1_7_1() {

    var answer = document.getElementById('ex1_7_1');
    var arr = 'abcde'.split("");
    answer.innerText = JSON.stringify(arr);
};


function lev1_7_2() {

    var answer = document.getElementById('ex1_7_2');
    var num = 12345;
    var arr = num.toString().split("");
    answer.innerText = JSON.stringify(arr);
};


function lev1_7_3() {

    var answer = document.getElementById('ex1_7_3');
    var num = 12345;
    var res = parseInt((num.toString().split("")).reverse().join(""));
    answer.innerText = res;
};


function lev1_8_1() {

    var answer = document.getElementById('ex1_8_1');
    var arr = [];
    for (var i = 1; i <= 10; i++) {
        arr.push(i);
    }
    answer.innerText = JSON.stringify(arr);
};


function lev1_9_1() {

    var answer = document.getElementById('ex1_9_1');
    var arr = [1, 2, 3, 4, 5, 6];
    var newArr = arr.map(myFunction)

    function myFunction(num) {
        return num + 10;
    }

    answer.innerText = JSON.stringify(newArr);
};

function lev1_9_2() {

    var answer = document.getElementById('ex1_9_2');
    var arr = ["http://ya.ru", "ya.ru", "http://google.com", "google.com"];
    var newArr = [];
    for (var i in arr) {
        if (arr[i].startsWith("http://")) {
            newArr.push(arr[i]);
        }
    }

    answer.innerText = JSON.stringify(newArr);
};


function lev2_1_1() {

    var answer = document.getElementById('ex2_1_1');
    var arr = [4, 10, 22, 13, 0, 8, 0, 4, 11, 22];
    var p = document.querySelector('.inp.inp2_1_1').value;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === parseInt(p)) {
            arr.splice(i, 1);
        }

    }

    answer.innerText = JSON.stringify(arr);
};


function lev2_3_1() {

    var answer = document.getElementById('ex2_3_1');
    var d = '2025-12-31';
    var arr = d.split('-');
    var obj = {
        "year": arr[0],
        "month": arr[1],
        "day": arr[2]
    };
    answer.innerText = JSON.stringify(obj);
};

function lev2_4_1() {

    var answer = document.getElementById('ex2_4_1');
    var str = "abd7na82hns";
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            answer.innerText = i;
            break;
        }
    }

};


function lev2_4_2() {

    var answer = document.getElementById('ex2_4_2');
    var str = 'abcde';
    var res = ''
    for (var i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            res += str[i].toUpperCase();
        } else {
            res += str[i];
        }
    }
    answer.innerText = res;

};


function lev2_4_3() {

    var answer = document.getElementById('ex2_4_3');
    var arr = 'aaa bbb ccc'.split(' ');
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].substr(1));
    }

    answer.innerText = newArr.join(" ");

};


function lev2_6_1() {

    var answer = document.getElementById('ex2_6_1');
    var arr = [123, 456, 789];
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(parseInt(((arr[i].toString().split("")).map(Number).sort((a, b) => b - a)).join("")));
    }
    answer.innerText = JSON.stringify(newArr);

};


function lev2_6_2() {

    var answer = document.getElementById('ex2_6_2');
    var str = 'AbCdE';
    var res = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            res += str[i].toLowerCase();
        } else {
            res += str[i].toUpperCase();
        }
    }
    answer.innerText = res;

};


function lev2_6_3() {

    var answer = document.getElementById('ex2_6_3');
    var arr = [1, 2, 3, 4, 5, 6];
    var arrStr = arr.map(String);
    var newArr = [];
    for (var i = 0; i < arrStr.length; i += 2) {
        newArr.push(parseInt(arrStr[i] + arrStr[i + 1]));
    }
    answer.innerText = JSON.stringify(newArr);

};


function lev2_7_1() {

    var answer = document.getElementById('ex2_7_1');
    var num = (123789).toString();
    var res = '';
    for (var i = 0; i < num.length; i++) {
        if (parseInt(num[i]) % 2 == 0) {
            res += num[i];
        }

    }
    answer.innerText = parseInt(res);

};


function lev2_8_1() {

    var answer = document.getElementById('ex2_8_1');
    var str = document.querySelector('.inp.inp2_8_1').value;
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            count ++;
        }

    }
    if (count == 2) {
        answer.innerText = "true";
    }
    else {
        answer.innerText = "false";
    }

};


function lev2_8_2() {

    var answer = document.getElementById('ex2_8_2');
    var str = "1 22 333 4444 22 5555 1";
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 3) {
            arr.splice(i, 1);
        }
    }
    answer.innerText = JSON.stringify(arr);

};


function lev2_8_3() {

    var answer = document.getElementById('ex2_8_3');
    let arr1 = [1, 2, 3];
    let arr2 = ['a', 'b', 'c'];
    for (var i = arr2.length-1; i >= 0 ; i--) {
        arr1.splice(2, 0, arr2[i]);
    }
    answer.innerText = JSON.stringify(arr1);

};


function lev2_9_1() {

    var answer = document.getElementById('ex2_9_1');
    var str = "123456";
    var arr = str.match(/.{1,2}/g);
    var sum = 0
    arr.forEach(n => {
        sum += parseInt(n)
    })

    answer.innerText = sum;

};

function lev2_9_2() {

    var answer = document.getElementById('ex2_9_2');
    var arr = [1, 2, 3, 4, 5];
    arr.reverse();
    answer.innerText = JSON.stringify(arr);

};


