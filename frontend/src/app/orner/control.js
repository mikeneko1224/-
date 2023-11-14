"use client"

const ClickDateTime = () => {
    // const saveBtn = document.getElementById('start');
    // console.log(saveBtn);
    let text = "";
    //buttonがクリックされた時点の日時情報を取得
    var currentDate = new Date()
    var year = currentDate.getFullYear()
    var month = currentDate.getMonth()
    month += 1;
    var date = currentDate.getDate()
    var hours = currentDate.getHours()
    var min = currentDate.getMinutes()
    console.log("開始打刻を押しました");

    var URL = 'http://127.0.0.1:8000/api/add_time/' + "3" + '/' + '出勤';
    fetch(URL,
        {
        method: 'GET',
        mode: 'no-cors',  // CORS モード
        headers: {
            'Content-Type': 'application/json',
            // 他のヘッダーが必要な場合は追加
        },
    })

    //ボタンをクリックした時点の日時をコンソールに表示
    text += year + "/" + month + "/" + date + " " + hours + ":" + min;
    document.getElementById("text").innerHTML = text;
};
export {ClickDateTime};

const ClickRestsTime = () => {
    // const saveBtn = document.getElementById('start');
    // console.log(saveBtn);
    let text1 = "";
    //buttonがクリックされた時点の日時情報を取得
    var currentDate = new Date()
    var year = currentDate.getFullYear()
    var month = currentDate.getMonth()
    month += 1;
    var date = currentDate.getDate()
    var hours = currentDate.getHours()
    var min = currentDate.getMinutes()
    console.log("休憩開始打刻を押しました");

    var URL = 'http://127.0.0.1:8000/api/add_time/' + "3" + '/' + '休憩開始';
    fetch(URL,
        {
        method: 'GET',
        mode: 'no-cors',  // CORS モード
        headers: {
            'Content-Type': 'application/json',
            // 他のヘッダーが必要な場合は追加
        },
    })

    //ボタンをクリックした時点の日時をコンソールに表示
    text1 += year + "/" + month + "/" + date + " " + hours + ":" + min;
    document.getElementById("text1").innerHTML = text1;
};
export {ClickRestsTime};

const ClickendTime = () => {
    // const saveBtn = document.getElementById('start');
    // console.log(saveBtn);
    let text2 = "";
    //buttonがクリックされた時点の日時情報を取得
    var currentDate = new Date()
    var year = currentDate.getFullYear()
    var month = currentDate.getMonth()
    month += 1;
    var date = currentDate.getDate()
    var hours = currentDate.getHours()
    var min = currentDate.getMinutes()
    console.log("退勤打刻を押しました");

    var URL = 'http://127.0.0.1:8000/api/add_time/' + "3" + '/' + '退勤';
    fetch(URL,
        {
        method: 'GET',
        mode: 'no-cors',  // CORS モード
        headers: {
            'Content-Type': 'application/json',
            // 他のヘッダーが必要な場合は追加
        },
    })

    //ボタンをクリックした時点の日時をコンソールに表示
    text2 += year + "/" + month + "/" + date + " " + hours + ":" + min;
    document.getElementById("text2").innerHTML = text2;
};
export {ClickendTime};

const ClickRestfTime = () => {
    // const saveBtn = document.getElementById('start');
    // console.log(saveBtn);
    let text3 = "";
    //buttonがクリックされた時点の日時情報を取得
    var currentDate = new Date()
    var year = currentDate.getFullYear()
    var month = currentDate.getMonth()
    month += 1;
    var date = currentDate.getDate()
    var hours = currentDate.getHours()
    var min = currentDate.getMinutes()
    console.log("休憩終了打刻を押しました");

    var URL = 'http://127.0.0.1:8000/api/add_time/' + "3" + '/' + '休憩終了';
    fetch(URL,
        {
        method: 'GET',
        mode: 'no-cors',  // CORS モード
        headers: {
            'Content-Type': 'application/json',
            // 他のヘッダーが必要な場合は追加
        },
    })
    //ボタンをクリックした時点の日時をコンソールに表示
    text3 += year + "/" + month + "/" + date + " " + hours + ":" + min;
    document.getElementById("text3").innerHTML = text3;
};
export {ClickRestfTime};