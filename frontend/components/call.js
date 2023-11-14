import axios from 'axios';

// 全従業員取得
export async function callAllstaff() {
    const res = await axios.get("http://127.0.0.1:8000/people");
    const data = res.data;
  
    return data;
}

// 勤怠取得
export async function callTime() {
  const res = await axios.get("http://127.0.0.1:8000/time_table");    
  const time = res.data;

  return time;
}

// シフトの時間を取得
export async function callShift() {
  const res = await axios.get("http://127.0.0.1:8000/add_shift");    
  const shift = res.data;

  return shift;
}

  
