//جافاسكربت ليست جافا
alert("مرحبا بك في موقعي! انا علي, وسوف احسب دجتك");

let grade = prompt("ادخل درجتك هنا: ");
console.log('%c' + grade, 'color: blue');

if (grade >= 90) {
    console.log("%c" + "لقد حصلت على امتياز 🥳", 'color: green')
}
else if (grade >= 80) {
    console.log("%c" + "لقد حصلت على جيد جداً🤩", 'color: green')
}
else if (grade >= 70) {
    console.log("%c" + "لقد حصلت على جيد🙂", 'color: yellow')
}
else if (grade >= 60) {
    console.log("%c" + "لقد حصلت على مقبول😕", 'color: yellow')
}
else if (grade >= 50) {
    console.log("%c" + "لقد حصلت على ضعيف☹️", 'color: red')
}
else {
    console.log("%c" + "راسب💔", 'color: red')
}