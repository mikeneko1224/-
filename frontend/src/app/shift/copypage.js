import React from 'react'
import Link from 'next/link'
//import {ClickDateTime} from './control.js'
//import './layout.css'
import { callAllstaff } from '../../../components/call';
//import { useRouter } from 'next/router';
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid"
import './layout.css';

export default async function staff({searchParams}) {
    let id = searchParams.id;
    let ID = id - 1;
    console.log(ID);

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let month1 = month + 1;
    let date = now.getDate();
    let day = year + "年" + month + "月" + date + "日";
    let Month =  month1 + "月";
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    var next_month = new Date(now.getFullYear(), now.getMonth()+1, now.getDate());
    const startDate = new Date(next_month.getFullYear(), next_month.getMonth() , 1) // 月の最初の日を取得
    const endDate = new Date(next_month.getFullYear(), next_month.getMonth()+1,  0) // 月の最後の日を取得
    let startDay = startDate.getDate();
    let endDay = endDate.getDate();

    // 前月の最後の日の情報
    const lastMonthEndDate = new Date(now.getFullYear(), now.getMonth() - 1 , 0);
    let lastMonthendDay = lastMonthEndDate.getDate();
    console.log(startDate.getDate());
    console.log(endDate.getDate());
    console.log(lastMonthEndDate.getDate());
    let daycount = 1;

    const data = await callAllstaff();

    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 mb-3 border-bottom shadow-sm">
                    <a className="navbar-brand" href="#">オーナー専用</a>
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
                                        for(let i = 0; i < 5; i++) {
                                            list2.push("<tr>");

                                            for(let d = 0; d < 7; d++) {
                                                if(i == 0 && d < startDay - 1) {
                                                    let num = lastMonthendDay - startDay + d + 2;
                                                    list2.push(<td className="is-disabled"> + num + </td>);
                                                } else if (daycount > endDay) {
                                                    // 末尾の日数を超えた
                                                    let num = daycount - endDay
                                                    list2.push(<td class="is-disabled">' + num + '</td>);
                                                    daycount++
                                                } else {
                                                    list2.push(
                                                        <td className="calendar_td" data-date="{year}/{month}/{daycount}">
                                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                        <div>{daycount}</div><div>あ</div></button>
                                                        </td>
                                                    );
                                                    daycount++ ;
                                                }
                                            } list2.push("</tr>");
                                        } return list2;
                                    }())
                                }
                                <tr>
                                <td className="calendar_td" data-date="{year}/{month}/{daycount}">
                                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                        <div>{daycount}</div><div>あ</div></button>
                                                        </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{day}</h5>
                        </div>
                        <div className="modal-body">
                        <select name="">
                            <option value="" selected disabled></option>
                            <option value="">×</option>
                            <option value="">10:00~14:00</option>
                            <option value="">14:00~18:00</option>
                            <option value="">18:00~22:00</option>
                        </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
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