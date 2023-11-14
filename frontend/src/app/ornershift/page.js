// "use client";
import './layout.css'
import { callAllstaff } from '../../../components/call';
import { callShift } from '../../../components/call';
import { getDateID } from './control.js';
import { save } from './control.js';

export default async function shift() {
    const data = await callAllstaff();

    const shiftdata = await callShift();
    console.log(shiftdata[0]["date"]);

    let now = new Date();
    var next_month = new Date(now.getFullYear(), now.getMonth()+1, now.getDate());
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let month1 = month + 1;
    let date = now.getDate();
    const endDate = new Date(next_month.getFullYear(), next_month.getMonth()+1,  0) // 月の最後の日を取得
    let endDay = endDate.getDate();
    console.log(endDay);// 月の最後の日を取得
    let day = year + "年" + month + "月" + date + "日";
    let Month =  month1 + "月";
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    var daycount = 1;
    var elemId = "";

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 mb-3 border-bottom shadow-sm">
                <a className="navbar-brand" href="#">オーナー専用</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/orner">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ornershift">シフト管理</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/">ログアウト</a>
                        </li>
                    </ul>
                </div>
                </nav>
            </header>
            <main>
                <div className="name">ログイン中：オーナー様</div>
                <div className="shift">
                    <div className="toumei">
                        <div className="title">{Month}分のシフト編集</div>

                        <div className="sumtable">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>合計時間</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    (function () {
                                        const list = [];
                                        for(let i = 0; i < data.length; i++) {
                                            let ID = data[i]["id"];
                                            let Name = data[i]["name"]; 
                                            list.push(
                                                <tr>
                                                    <td>{Name}</td>
                                                    <td>時間</td>
                                                </tr>
                                            );
                                        }
                                        return list;
                                    }())
                                }
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="shifttable">
                            <table>
                                <thead>
                                <tr>
                                    <th></th>
                                    {
                                        (function () {
                                            const list2=[];
                                            for(let i = 0; i < data.length; i++) {
                                                let Name = data[i]["name"]; 
                                                list2.push(
                                                    <th>{Name}</th>
                                                )
                                            } return list2;
                                        }()) 
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        (function () {
                                            let list3 = [];
                                            for(var i = 1; i < endDay + 1; i++) {
                                                let div_tag = i + "_text";
                                                let data2 = year + "-" + month1 + "-" + i;
                                                let filteredShiftData = shiftdata.filter(item => item.number === 1)
                                                let shiftDataForDay = filteredShiftData.find(item => item.date === data2);
                                                let filteredShiftData2 = shiftdata.filter(item => item.number === 2)
                                                let shiftDataForDay2 = filteredShiftData2.find(item => item.date === data2);
                                                    list3.push(
                                                        <tr>
                                                            <td>{i}日</td>
                                                            <td>
                                                                <button id={i} type="button" className="btn" data-date={data2} data-toggle="modal" data-target="#exampleModal" onClick={getDateID}>
                                                                <div id={div_tag}></div>{shiftDataForDay ? shiftDataForDay.time : ''}</button>
                                                            </td>
                                                            <td><button id={i} type="button" className="btn" data-date={data2} data-toggle="modal" data-target="#exampleModal" onClick={getDateID}>
                                                                <div id={div_tag}></div>{shiftDataForDay2 ? shiftDataForDay2.time : ''}</button></td>
                                                            
                                                        </tr>
                                                    );
                                            } return list3;

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
                            <button type="button" id="" className="btn btn-primary" onClick={save}>Save</button>
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