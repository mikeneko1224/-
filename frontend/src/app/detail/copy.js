"use client"

const ClickDateTime = () => {
const saveBtn = document.getElementById('start');
console.log(saveBtn);
let text = "";
//buttonがクリックされた時点の日時情報を取得
saveBtn.addEventListener('click', () => {
    var currentDate = new Date()
        var year = currentDate.getFullYear()
        var month = currentDate.getMonth()
        month += 1;
        var date = currentDate.getDate()
        var hours = currentDate.getHours()
        var min = currentDate.getMinutes()
        console.log("開始打刻を押しました");
    //ボタンをクリックした時点の日時をコンソールに表示
    text += year + "/" + month + "/" + date + " " + hours + ":" + min;
    document.getElementById("text").innerHTML = text;
});
};
export {ClickDateTime};
