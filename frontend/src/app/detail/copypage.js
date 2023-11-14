import React from 'react'
import Link from 'next/link'
import {ClickDateTime} from './control.js'
import './layout.css'
import { callAllstaff } from '../../../components/call';
//import { useRouter } from 'next/router';

export default async function staff({searchParams}) {
    let id = searchParams.id;
    let ID = id - 1;
    console.log(ID);

    // const MyComponent = props => {
    //     const router = useRouter();
    //     console.log(router.pathname);
    // }

    const data = await callAllstaff();
    console.log("**********");
    console.log(data);
    console.log(data[ID]);

    let text = "";

    // function startTime () {
    //     var currentDate = new Date()
    //     var year = currentDate.getFullYear()
    //     var month = currentDate.getMonth()
    //     month += 1;
    //     var date = currentDate.getDate()
    //     var hours = currentDate.getHours()
    //     var min = currentDate.getMinutes()
    //     console.log("開始打刻を押しました");

    //     text += year + "/" + month + "/" + date + " " + hours + ":" + min;
    //     return text;
    // }

    // let startTime ("click", () => {
    //     var currentDate = new Date()
    //     var year = currentDate.getFullYear()
    //     var month = currentDate.getMonth()
    //     month += 1;
    //     var date = currentDate.getDate()
    //     var hours = currentDate.getHours()
    //     var min = currentDate.getMinutes()
    //     console.log("開始打刻を押しました");

    //     text += year + "/" + month + "/" + date + " " + hours + ":" + min;
    //     return text;
    // });

    // function startTime () {
    //     button.on('click', function () {
    //         var currentDate = new Date()
    //         var year = currentDate.getFullYear()
    //         var month = currentDate.getMonth()
    //         month += 1;
    //         var date = currentDate.getDate()
    //         var hours = currentDate.getHours()
    //         var min = currentDate.getMinutes()
    //         console.log("開始打刻を押しました");

    //         text += year + "/" + month + "/" + date + " " + hours + ":" + min;
    //         return text;
    //     });
    // };

    return (
        <div>
            <header>
                <h1>{data[ID]["name"]}</h1>
                <ul>
                    <li><Link href={{
                        pathname:"detail",
                        query: { id: id},
                    }}
                    >出勤状況</Link></li>
                    <li><Link href={{
                        pathname:"shift",
                        query: { id: id},
                    }}
                    >シフト提出</Link></li>
                    <li><Link href={{
                        pathname:"score",
                        query: { id: id},
                    }}
                    >実績</Link></li>
                </ul>
            </header>
            <main>
                <button type="button" onClick={ClickDateTime} id="start">開始打刻</button>
                <div></div>
                <span id="text">{text}</span>
                <button type="button" className="end">終了打刻</button>
                <div></div>
                <button type="button" className="restStart">休憩開始打刻</button>
                <div></div>
                <button type="button" className="restEnd">休憩終了打刻</button>
            </main>
            <a href="/">戻る</a>
        </div>
    )
}