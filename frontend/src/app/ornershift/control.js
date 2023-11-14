"use client"

// const save = () => {
//     var text = document.getElementById('selectTime');
//     var ID = document.getElementById("exampleModalLabel");
//     document.getElementById(ID).innerHTML = text; 
// }
// export {save};

var save_id = 0;

const save = (e) => {
    console.log("save start ");
    // var text = document.getElementById('selectTime');
    var text = document.getElementById('selectTime');
    //var ID = document.getElementById("exampleModalLabel");
    // var e = e || window.Event;
    // var elem = e.target || e.srcElement;
    // var elemId = elem.id;
    // console.log(elemId);
    console.log(text.value);
    console.log("save_id: " + save_id);

    // document.getElementById(elemId + "_text").innerHTML = text;
    console.log(save_id);
    document.getElementById(save_id).innerHTML = text.value;

}
export {save};

const getDateID = (e) => {
    let now = new Date();
    var next_month = new Date(now.getFullYear(), now.getMonth()+1, now.getDate());
    let year = now.getFullYear();
    let month = now.getMonth()+2;

    //idの取得
    var e = e || window.Event;
    var elem = e.target || e.srcElement;
    var elemId = elem.id;
    console.log(elemId);
    var elemId2 = elemId.substr(0, 1);
    console.log(elemId2);
    document.getElementById('exampleModalLabel').innerHTML = year + "年" + month + "月" + elemId2 + "日";
    var elem2 = document.getElementsByClassName('btn btn-primary');
    console.log(elem2);
    //elem2.Attr("id", elemId);
    elem2.id = elemId;
    save_id = elemId;
    console.log(elem2.id);
    console.log("save_id: " + save_id);
    //return elemId;
}
export {getDateID};

// document.addEventListener("click", function(e) {
//     if(e.target.classList.contains("btn_date_time")) {
//         let date = e.target.dataset.date;
//         document.getElementById('exampleModalLabel').innerHTML = date;
//     }
// })