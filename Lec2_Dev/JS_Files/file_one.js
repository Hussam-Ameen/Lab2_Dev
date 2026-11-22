// 1. المتغيرات وثوابت النطاق (Scope)
var x = 10;
x = 30;
console.log(x);
document.write(x + "<br>");

let y = 10;
console.log(y);

const z = 200;

if (true) {
    var a = "var يتسرب لخارج الأقواس";
    let b = "let محمي داخل الأقواس";
    const c = "const محمي داخل الأقواس";
    console.log(b);
}

// console.log(a);

// 2. العمليات الحسابية وإسناد القيم
let score = 100;
let namee = "أحمد";

score += 50;  // النتيجة: 150
score -= 20;  // النتيجة: 130
score *= 2;   // النتيجة: 260

// let greeting = "مرحبا ";
// let ew = greeting + namee;
// console.log(ew + score);


document.write(" العلم نور والجهل ظلام<br>");
document.write("<h1>ارتقي بنفسك ولاتقبل بأن تكون عادياً</h1>");
document.write("<h1 style='color:red'>HERE WE GO</h1>");
document.write("<br>");
document.write("welcome <br>");


let std_name = window.prompt("أدخل اسمك من فضلك");
alert(std_name + " " + "اهلا بك في موقعنا ");

let city = window.prompt("أدخل اسم مدينتك من فضلك ؟");

let con = window.confirm("هل تريد حفظ البيانات؟");

if (con == true) {
    console.log("true");
    document.write("<b>اسمك هو: " + std_name + "</b><br>");
} else {
    console.log("false");
}


let numinteger = 25;
let numfloat = 2.4;
let flag = true;
const dept_num = 20;