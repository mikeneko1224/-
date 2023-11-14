//import './layout.js'
import { callAllstaff } from '../../../components/call';
//import './globals.css'
import Link from "next/link";
//import { useRouter } from 'next/router'

export default async function Home({searchParams}) {
    let id = searchParams.id;
    let ID = id - 1;
    console.log(ID);
    //const router = useRouter();
    const data = await callAllstaff();

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

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
        </div>
    )
}