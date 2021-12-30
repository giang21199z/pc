import Button from "component/button/Button";
import LineChart from "component/chart/line/LineChart";
import PieChart from "component/chart/pie/PieChart";
import User from "pages/administrator/User";
import { Mediator } from "./Mediator";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import {show, hide} from 'utils/loading/loading.reducer';
import { setData } from 'pages/administrator/user.reducer';
import axios from 'axios';

function Dashboard() {

  const [isShowUser, setIsShowUser] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res.data);
      dispatch(setData(res.data));
    });
  }, []);

  const btnCb = () => {
    console.log('click');
    setIsShowUser(!isShowUser);
    dispatch(show());

    setTimeout(() => {
      dispatch(hide());
    }, 2000);
  }

  const mediator = new Mediator(btnCb);

  return (
    <>
      <div className="text-center p-20">
        <Button mediator={mediator}>Click me now!</Button>
      </div>
      {
        !isShowUser && <div className="d-flex">
          <div className="w-50 h-500 p-20">
            <LineChart/>
          </div>
          <div className="w-50 h-500 p-20">
            <PieChart/>
          </div>
        </div>
      }
      {
        isShowUser && <User data={[]}/>
      }
    </>
  )
}
export default Dashboard;
