"use client"
//import { useRouter } from 'next/router';
//console.log(React.version, ReactDOM.version)
var save_id = 0;

const save = (e) => {
    console.log("save1 start ");

    // 選択した値を抽出
    var text = document.getElementById('selectTime');
    console.log("text.value: " + text.value);
    console.log("save_id: " + save_id);
    let SaveID = save_id;
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+2;
    let reSaveID = SaveID.split("_");
    let day = reSaveID[0];
    let ID = reSaveID[2]; 
    console.log(ID);

    //シフトの保存
    let date2 = year + "-" + month + "-" + day;
    //'/add_shift/{user_id}/{date}/{time}'
    var URL = 'http://127.0.0.1:8000/api/add_shift/' + ID + '/' + date2 + '/' + text.value;
    fetch(URL,
        {
        method: 'GET',
        mode: 'no-cors',  // CORS モード
        headers: {
            'Content-Type': 'application/json',
            // 他のヘッダーが必要な場合は追加
        },
    })

    // document.getElementById(elemId + "_text").innerHTML = text;
    console.log(save_id);
    //document.getElementsByClassName(save_id)[0].innerHTML = text.value;

}
export {save};


//日付をクリックした後の画面の日付表示
const getDateID = (e) => {
    console.log("getDateID start");
    let now = new Date();
    //来月の日付
    var next_month = new Date(now.getFullYear(), now.getMonth()+1, now.getDate());
    let year = now.getFullYear();
    let month = now.getMonth()+2;

    //idの値を抽出して日付を取得
    var e = e || window.Event;
    var elem = e.target || e.srcElement;
    var elemId = elem.id;
    console.log("elemId: " + elemId);
    var elemId2 = elemId.substr(0, elemId.indexOf("_")); // 日付の取得
    console.log("elemId2: " + elemId2);
    //日付を表示
    document.getElementById('exampleModalLabel').innerHTML = year + "年" + month + "月" + elemId2 + "日";

    //saveボタンにidを付ける
    var elem2 = document.getElementsByClassName('btn btn-primary');
    console.log(elem2);
    //elem2.Attr("id", elemId);
    elem2.id = elemId;
    save_id = elemId;
    console.log("elem2.id: " + elem2.id);
    console.log("save_id: " + save_id);
    //return elemId;
    console.log("getDateID end");
}
export {getDateID};