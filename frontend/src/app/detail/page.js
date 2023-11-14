import React from 'react'
import Link from 'next/link'
import {ClickDateTime} from './control.js'
import {ClickRestsTime} from './control.js'
import {ClickendTime} from './control.js'
import {ClickRestfTime} from './control.js'
import './layout.css'
import { callAllstaff } from '../../../components/call';
import { callTime } from '../../../components/call';
import axios from 'axios';
import { useRouter } from 'next/navigation';



export default async function staff({searchParams}) {
    let id = searchParams.id;
    let ID = id - 1;
    console.log(ID);

    // 従業員のデータを取得
    const data = await callAllstaff();
    // console.log("**********");
    // console.log(data);
    // console.log(data[ID]);

    // 勤怠データの取得
    const time = await callTime();
    // console.log(time);

    let text = "";
    let text1 = "";
    let text2 = "";
    let text3 = "";
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let date = now.getDate();
    let day = year + "年" + month + "月" + date + "日";
    let day3 = year + "-" + month + "-" + date;

    for(let i = 0; i < time.length; i++) {
        if(time[i]["name"] == id && time[i][text] == "出勤" && time[i][date] == day3) {
            text = time[i]["time"];
        } 
    } 



    return (
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
                <div className="Timestamp">
                    <div className="toumei">
                        <div className="title">{day}の打刻</div>
                        <div className="stamp">
                            <div className="fast">
                                <button type="button" onClick={ClickDateTime} id={id} className="start">出勤</button>
                                <button type="button" onClick={ClickRestsTime} id={id} className="start">休憩開始打刻</button>
                            </div>
                            <div className="second">
                                <button type="button" onClick={ClickendTime} id={id} className="start">退勤</button>
                                <button type="button" onClick={ClickRestfTime} id={id} className="start">休憩終了打刻</button>
                            </div>
                        </div>
                        <div className="record">
                            <div className="title">{day}のタイムレコード</div>
                            <div className="table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>打刻時間</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="header">
                                            <td>出社</td>
                                            <td id="text">{text}</td>
                                        </tr>
                                        <tr>
                                            <td>休憩開始</td>
                                            <td id="text1">{text1}</td>
                                        </tr>
                                        <tr>
                                            <td>休憩終了</td>
                                            <td id="text3">{text3}</td>
                                        </tr>
                                        <tr>
                                            <td>退社</td>
                                            <td id="text2">{text2}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>

            {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script> */}
        </div>
    )
}