//import './layout.js'
import { callAllstaff } from '../../components/call';
import './globals.css'
import Link from "next/link";
//import { useRouter } from 'next/router'

export default async function Home({searchParams}) {
  //const router = useRouter();
  const data = await callAllstaff();
  //console.log("**********");
  //console.log(data);
  //console.log(data[0]["id"]);

  let ID = "";
  for(let i = 0; i < data.length; i++) {
    let ID = data[i]["id"];
    let Name = data[i]["name"];
    
  }

  // const handleClick = (keyword) => {
  //   router.push({
  //     pathname: "detail",
  //     query: { id: keyword },
  //   });
  // };


    return(
      <div>
        <header>
          <h1>勤怠管理</h1>
        </header>
        <main>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>name</th>
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
                            <td><Link href={{
                              pathname:"detail",
                              query: {id: ID},
                            }}>{ID}</Link></td>
                            <td>{Name}</td>
                          </tr>
                        );
                      }
                      return list;
                    }())
                  }
              </tbody>
            </table>
          </div>
          <a href="/orner">オーナー専用</a>
        </main>
      </div>
    )
}