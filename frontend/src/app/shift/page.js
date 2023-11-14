import React from 'react'
import Link from 'next/link'
//import {ClickDateTime} from './control.js'
//import './layout.css'
import { callAllstaff } from '../../../components/call';
import { callShift } from '../../../components/call';
//import { CreateCalender } from './control';
//import { useRouter } from 'next/router';
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid"
import './layout.css';
import { getDateID } from './control.js';
import { save } from './control.js';
import shift from '../ornershift/page';

export default async function staff({searchParams}) {
    var id = searchParams.id;
    var ID = id - 1;
    console.log(ID);

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let month1 = month + 1;
    let date = now.getDate();
    let day = year + "年" + month + "月" + date + "日";
    let Month =  month1 + "月";
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    var daycount = 1;

    const data = await callAllstaff();
    console.log(data);

    const shiftdata = await callShift();
    console.log(shiftdata[0]["date"]);

    const CreateCalender = (i, Calenderbody, daycount) => {
        //console.log("CreateCalender Start");
        // 現在の日付
        let now = new Date();
        // 来月の日付
        var next_month = new Date(now.getFullYear(), now.getMonth()+1, now.getDate());
        const startDate = new Date(next_month.getFullYear(), next_month.getMonth() , 1) // 月の最初の日を取得
        let startday = startDate.getDay();
        const endDate = new Date(next_month.getFullYear(), next_month.getMonth()+1,  0) // 月の最後の日を取得
        let endDay = endDate.getDate();
        // 前月の最後の日の情報
        const lastMonthEndDate = new Date(now.getFullYear(), now.getMonth() - 1 , 0);
        var lastMonthendDay = lastMonthEndDate.getDate();
        //console.log(endDay);
        // let Calenderbody = [];

        //カレンダーの作成
        for(let d = 0; d < 7; d++) {
            let div_tag = daycount +"_text_" + id; 
            //console.log({d});
            if(i == 0 && d < startday) {
                let num = lastMonthendDay - startday + d + 2;
                Calenderbody.push(<td className="is-disabled">{num}</td>);
            } else if (daycount > endDay) {
                // 末尾の日数を超えた
                let lastnum = daycount - endDay;
                Calenderbody.push(<td className="is-disabled" >{lastnum}</td>);
                daycount++ ;
            } else {
                let data2 = year + "-" + month1 + "-" + daycount;
                let ShiftTime = "";

                let hasShiftData = false;
                let hasAllsheftdata = false;
                // console.log("date2: "+data2)
                // console.log("For Start")
                for (let Nom = 0; Nom < shiftdata.length; Nom++) {
                    // console.log("Nom: "+Nom)
                    let shiftDay = shiftdata[Nom]["date"];
                    //console.log(shiftDay);

                    //全体シフトで人数が足りていない日付をfalseにする
                    let cellStyle = {};
                    if(shiftDay == data2) {
                        let AllTime = shiftdata[Nom]["time"];
                        let NeedTime = "10:00~14:00";
                        if(AllTime == NeedTime) {
                            hasAllsheftdata = true;
                        //console.log(hasAllsheftdata);
                        }
                    }

                    // 個々の保存している希望シフトを画面に表示させる
                    if(shiftdata[Nom]["number"] == id) {
                        let personalShift = shiftdata[Nom]["date"];
                        if (personalShift == data2) {
                            ShiftTime = shiftdata[Nom]["time"];
                            hasShiftData = true;
                            // console.log(ShiftTime);
                            break; // 一致したのでループを終了
                        }
                    } 
                }

                //シフトで人数が足りない場合、背景をピンクにする
                let cellStyle = {};
                if (!hasAllsheftdata) {
                    cellStyle = { backgroundColor: 'pink' };
                }

                Calenderbody.push(
                    <td className="calendar_td" data-date={data2} style={cellStyle}>
                    <button id = {daycount} type="button" className="btn" data-toggle="modal" data-target="#exampleModal" onClick={getDateID}>
                    <div id={div_tag} className="day">{daycount}</div><div id={div_tag} className={div_tag} style={{fontSize: "12px"}}>{hasShiftData ? ShiftTime : ""}</div></button>
                    </td>
                );
                daycount++ ;
                
            }
            //console.log({Calenderbody});
        }
        //console.log(daycount);
        //console.log("CreateCalender End");
        return (Calenderbody, daycount);
    }
    //export {CreateCalender};

    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 mb-3 border-bottom shadow-sm">
                    <a className="navbar-brand" href="#">パン屋</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href={"http://localhost:3000/detail?id=" + id}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"http://localhost:3000/shift?id=" + id}>シフト提出</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"http://localhost:3000/score?id=" + id}>実績</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">ログアウト</a>
                        </li>
                    </ul>
                </div>
                </nav>
            </header>
            
        <main>
            <div className="name">ログイン中：{data[ID]["name"]}様</div>
            <div className="shift">
                <div className="toumei">
                    <div className="title">{Month}分のシフト申請</div>
                    <div id="calender">
                        <table>
                            <thead>
                                <tr>
                                    {
                                    (function() {
                                        let list = [];
                                        for(let i = 0; i < days.length; i++) {
                                            list.push(
                                                <td>{days[i]}</td>
                                            );
                                        } return list;
                                    }())
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (function () {
                                        let list2 = [];
                                        for(let i = 0; i < 6; i++) {
                                            let Calenderbody = [];
                                            Calenderbody, daycount = CreateCalender(i, Calenderbody, daycount);
                                            // console.log({daycount});
                                            // console.log({Calenderbody});
                                            list2.push(<tr>{Calenderbody}</tr>);
                                        } return list2;
                                    }())
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"></h5>
                        </div>
                        <div className="modal-body">
                        <div>希望時間を選択</div>
                        <select name="selectTime" id="selectTime">
                            <option value="" selected disabled></option>
                            <option value="×">×</option>
                            <option value="10:00~14:00">10:00~14:00</option>
                            <option value="14:00~18:00">14:00~18:00</option>
                            <option value="18:00~22:00">18:00~22:00</option>
                        </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={save}>送信</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
        </div>
    )
}