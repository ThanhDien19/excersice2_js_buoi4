/**
 * Bài 1: viết chương trình ngày tháng năm của ngày tiếp theo và trước đó.
 *
 * Nhập ngày, Tháng, Năm, ngày kế tiếp, tháng kế tiếp, năm kế tiếp;
 *
 * ngày tháng năm tiếp theo:
 * ngày += 1
 * nếu ngày > 30 thì tháng +=1 và ngày = 1
 * nếu tháng > 12 thì năm +=1 và tháng = 1
 *
 * in ra ngày tháng năm kế tiếp
 */

var day = 30;
var month = 12;
var year = 2021;
var nextday;
var nextmonth;
var nextyear;
console.log("hôm nay là ngày:" + day + " tháng " + month + " năm " + year);
if (day < 30 && day >= 1 && month <= 12) {
  nextday = day + 1;
  nextmonth = month;
  nextyear = year;
  console.log(
    "hôm sau là ngày:" + nextday + " tháng " + nextmonth + " năm " + nextyear
  );
} else if (day >= 30 && month < 12) {
  nextday = 1;
  nextmonth = month + 1;
  nextyear = year;
  console.log(
    "hôm sau là ngày:" + nextday + " tháng " + nextmonth + " năm " + nextyear
  );
} else if (day >= 30 && month == 12) {
  nextday = 1;
  nextmonth = 1;
  nextyear = year + 1;
  console.log(
    "hôm sau là ngày:" + nextday + " tháng " + nextmonth + " năm " + nextyear
  );
}

/**
 * Bài 2: viết chương trình nhập tháng năm. cho biết tháng đó có bao nhiêu ngày(bao gồm tháng của năm nhuận)
 * Nhập tháng, năm
 * nếu là tháng 1,3,5,7 ,8,10,12 thì có 31 ngày
 * tháng 2 có 29 ngày
 * các tháng còn lại có 30 ngày
 * riêng năm nhuận tháng 2 có 28 ngày
 * cứ 4 năm có 1 năm nhuận
 * năm nhuận năm % 4 = 0
 * in ra số ngày trong tháng đó
 */
var thang = 2;
var nam = 2020;

if (
  thang == 1 ||
  thang == 3 ||
  thang == 5 ||
  thang == 7 ||
  thang == 8 ||
  thang == 10 ||
  thang == 12
) {
  console.log(" Tháng " + thang + " năm " + nam + " có 31 ngày");
} else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
  console.log(" Tháng " + thang + " năm " + nam + " có 30 ngày");
} else if (thang == 2 && nam % 4 == 0) {
  console.log(" Tháng " + thang + " năm " + nam + " có 28 ngày");
} else if (thang == 2 && nam % 4 != 0) {
  console.log(" Tháng " + thang + " năm " + nam + " có 29 ngày");
}

/**
 * Bài 3: viết chương trình nhập số nguyên có 3 chữ số và in ra các đọc nó.
 * nhập số nguyên có 3 chữ số bất kỳ lớn hơn bằng 100 và nhỏ hơn bằng 999
 * chữ số hàng trăm = Math.floor(soNguyen/100)
 * Chữ số hàng chục = Math.floor(soNguyen%100/10)
 * chữ số hàng đơn vị = soNguyen % 10
 * in ra cách đọc chữ số
 *
 */

var n = 678;
var hangTram;
var hangChuc;
var hangDonVi;
console.log("số tự nhiên có 3 chữ số là:" + n);
if (n >= 100 && n <= 999) {
  hangTram = Math.floor(n / 100);
  hangChuc = Math.floor((n % 100) / 10);
  hangDonVi = n % 10;
  console.log(hangTram + " trăm " + hangChuc + " mươi " + hangDonVi);
} else {
  console.log("số tự nhiên có 3 chữ số không hợp lệ ");
}

/**
 * Bài 4: cho biết tọa độ của 3 sinh viên, tọa độ trường. Viết chương trình in tên sinh viên xa trường nhất
 * nhập vào tên và tọa độ 3 sinh viên và trường học
 * sinh viên A (trucTungA,trucHoanhA)
 * sinh viên B (trucTungB,trucHoanhB)
 * sinh viên C (trucTungC,trucHoanhC)
 * Trường học O (trucTungO,trucHoanhO)
 *
 * công thức tính khoảng cách giữa 2 tọa độ trong mặt phẳng OXY, cho điểm M(a,b)và N (c,d)
 * khoảng cách MN = căn bậc 2 của (a-c)*(a-c)+(b-d)*(b-d)
 * sau khi tính khoảng cách tọa độ của 3 sinh viên với trường thì đem ra so sánh
 *
 * tìm dc khoảng cách lớn nhất và in ra tên sinh viên đó
 */

// tọa độ học sinh A
var trucTungA = 5;
var trucHoanhA = 6;

// tọa độ học sinh B
var trucTungB = 7;
var trucHoanhB = 8;

// tọa độ học sinh C
var trucTungC = 9;
var trucHoanhC = 10;

// tọa độ trường học O
var trucTungO = 0;
var trucHoanhO = 0;

//khoảng cách sinh viên với trường
var AO;
var BO;
var CO;

AO = Math.sqrt(
  (trucTungA - trucTungO) * (trucTungA - trucTungO) +
    (trucHoanhA - trucHoanhO) * (trucHoanhA - trucHoanhO)
);
console.log("khoảng cách AO:" + AO);

BO = Math.sqrt(
  (trucTungB - trucTungO) * (trucTungB - trucTungO) +
    (trucHoanhB - trucHoanhO) * (trucHoanhB - trucHoanhO)
);
console.log("khoảng cách BO:" + BO);

CO = Math.sqrt(
  (trucTungC - trucTungO) * (trucTungC - trucTungO) +
    (trucHoanhC - trucHoanhO) * (trucHoanhC - trucHoanhO)
);
console.log("khoảng cách CO:" + CO);

if (AO > BO && AO > CO) {
  console.log("Học sinh A xa trường nhất");
} else if (BO > AO && BO > CO) {
  console.log("Học sinh C xa trường nhất");
} else if (CO > BO && CO > AO) {
  console.log("Học sinh C xa trường nhất");
}
