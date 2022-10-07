//1
console.log('-soal 1');
function hasil1(n) {
    let result = 1;
    for (let index = n; index > 0; index--) {
        result = index * result;
    }
    return result;
  };
  console.log(hasil1(4));
  console.log(hasil1(8));


//2
console.log('--soal 2');
function reverse(str) {
    reverseStr = '';
    let index = str.length -1
    while (index >= 0) {
        reverseStr +=  str[index];index--;
        console.log(reverseStr);
    }
    return reverseStr;
}
reverse('abcde');


//3
console.log('---soal 3');
const printDigitValue = (str) => {
    let newString = '';
    let length = 0;
    for (let index = 0; index < str.length; index++) {
        if (!isNaN(str[index])) {
            newString += str[index];
        }
    }
    console.log(newString);
    length = newString.length - 1;
    for (let element = 0; element < newString.length; element++) {
      if (length >= 1) console.log(parseInt(newString[element]) * 10 ** length);
      else console.log(1);
      length--;
    }
  };
  printDigitValue('9.86-A5.321');


//4
console.log('----soal 4');
let a = 3;
let b = 7;
[a, b] = [b, a];
console.log(a);
console.log(b);


//5
console.log('-----soal 5');
function hasil5(n) {
	let huruf = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
	if (n < 12) {
		return huruf[n];
	} else if (n < 20) {
		return huruf[n - 10] + ' belas';
	} else if (n < 100) {
		return huruf[Math.floor(n / 10)] + ' puluh ' + huruf[n % 10];
	} else if (n == 100) {
		return 'seratus ';
	} else {
		return 'Silahkan masukkan angka 1 - 100';
	}
}
console.log(hasil5(4));
console.log(hasil5(20));
console.log(hasil5(39));
console.log(hasil5(104));


//6
console.log('-------soal 6');
let rendah = 2;
let tinggi = 15;
let array6 = [1, 4, 7, 9, 12];
let hasil6 = [];
for (let index = 0; index < array6.length; index++) {
    if (array6[index] >= rendah && array6[index] <= tinggi) {
        hasil6.push(array6[index]);
    }
}
console.log(hasil6);


//7
console.log('-------soal 7');
console.log(hasil6.length);


//8
console.log('--------soal 8');
for (let index = 1; index<=15 ; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("Eduwork"); 
    } else if (index % 3 === 0) {
        console.log("edu"); 
    } else if (index % 5 === 0) {
        console.log("work");
    } else {
        console.log((index));
    }
}


//9
console.log('--------soal 9');
let array9 = [4, 2, 6, 88, 3, 11];
let low = array9[0];
let high = array9[0];
for (let index = 1; index < array9.length; index++) {
    if (array9[index] < low ) {
        low = array9[index];
    }
    if (array9[index] > high  ) {
        high = array9[index];
    }
}
console.log({low}, {high});


//10
console.log('---------soal 10');
function kabisat(tahun) {
    if (tahun % 4 === 0) {
        return(`tahun ${tahun} adalah tahun kabisat`)
    }else{
        return(`tahun ${tahun} bukan tahun kabisat`)
    }
}
console.log(kabisat(2021));
console.log(kabisat(2024));
