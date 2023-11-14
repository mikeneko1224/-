import {ClickDateTime} from './control.js'
import {ClickRestsTime} from './control.js'
import {ClickendTime} from './control.js'
import {ClickRestfTime} from './control.js'
import './layout.css'

export default function Home() {
    let text = "";
    let text1 = "";
    let text2 = "";
    let text3 = "";
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let date = now.getDate();
    let day = year + "年" + month + "月" + date + "日";

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
                <div className="Timestamp">
                    <div className="toumei">
                        <div className="title">{day}の打刻</div>
                        <div className="stamp">
                            <div className="fast">
                                <button type="button" onClick={ClickDateTime} id="start">出勤</button>
                                <button type="button" onClick={ClickRestsTime} id="restStart">休憩開始打刻</button>
                            </div>
                            <div className="second">
                                <button type="button" onClick={ClickendTime} id="end">退勤</button>
                                <button type="button" onClick={ClickRestfTime} id="restEnd">休憩終了打刻</button>
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

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
        </div>

    )
}