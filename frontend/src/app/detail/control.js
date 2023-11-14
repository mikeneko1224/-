"use client"
//import { addTime } from '../../../components/sqlcall';

const ClickDateTime = (e) => {
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

    var e = e || window.Event;
    var elem = e.target || e.srcElement;
    var elemId = elem.id;
    console.log("elemId: " + elemId);

    //ボタンをクリックした時点の日時をコンソールに表示
    text += year + "/" + month + "/" + date + " " + hours + ":" + min;
    let day = year + "/" + month + "/" + date;
    let time = hours + ":" + min;
    document.getElementById("text").innerHTML = text;

    let obj={
        name: elemId,
        text: "出勤",
        date: day,
        time: time
    }

    // const postData = {
    //     key1: 'value1',
    //     key2: 'value2',
    //     key3: 'value3'
    //   };
      
    //   fetch('http://127.0.0.1:8000/api/add_time/',
    //       {
    //           method: 'POST',
    //           body: postData
    //       })


    var URL = 'http://127.0.0.1:8000/api/add_time/' + elemId + '/' + "出勤";
    fetch(URL,
        {
        method: 'GET',
        mode: 'no-cors',  // CORS モード
        headers: {
            'Content-Type': 'application/json',
            // 他のヘッダーが必要な場合は追加
        },
    })

    // const data = addTime(obj);
};
export {ClickDateTime};

const ClickRestsTime = (e) => {
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

    var e = e || window.Event;
    var elem = e.target || e.srcElement;
    var elemId = elem.id;
    console.log("elemId: " + elemId);

    //ボタンをクリックした時点の日時をコンソールに表示
    text1 += year + "/" + month + "/" + date + " " + hours + ":" + min;
    document.getElementById("text1").innerHTML = text1;

    var URL = 'http://127.0.0.1:8000/api/add_time/' + elemId + '/' + '休憩開始';
    fetch(URL,
        {
        method: 'GET',
        mode: 'no-cors',  // CORS モード
        headers: {
            'Content-Type': 'application/json',
            // 他のヘッダーが必要な場合は追加
        },
    })
};
export {ClickRestsTime};

const ClickendTime = (e) => {
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

    var e = e || window.Event;
    var elem = e.target || e.srcElement;
    var elemId = elem.id;
    console.log("elemId: " + elemId);

    //ボタンをクリックした時点の日時をコンソールに表示
    text2 += year + "/" + month + "/" + date + " " + hours + ":" + min;
    document.getElementById("text2").innerHTML = text2;

    var URL = 'http://127.0.0.1:8000/api/add_time/' + elemId + '/' + '退勤';
    fetch(URL,
        {
        method: 'GET',
        mode: 'no-cors',  // CORS モード
        headers: {
            'Content-Type': 'application/json',
            // 他のヘッダーが必要な場合は追加
        },
    })
};
export {ClickendTime};

const ClickRestfTime = (e) => {
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

    var e = e || window.Event;
    var elem = e.target || e.srcElement;
    var elemId = elem.id;
    console.log("elemId: " + elemId);

    //ボタンをクリックした時点の日時をコンソールに表示
    text3 += year + "/" + month + "/" + date + " " + hours + ":" + min;
    document.getElementById("text3").innerHTML = text3;

    var URL = 'http://127.0.0.1:8000/api/add_time/' + elemId + '/' + '休憩終了';
    fetch(URL,
        {
        method: 'GET',
        mode: 'no-cors',  // CORS モード
        headers: {
            'Content-Type': 'application/json',
            // 他のヘッダーが必要な場合は追加
        },
    })
};
export {ClickRestfTime};
