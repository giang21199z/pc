import Button from "component/button/Button";
import LineChart from "component/chart/line/LineChart";
import PieChart from "component/chart/pie/PieChart";
import Demo from "pages/features/Demo";
import { Mediator } from "./Mediator";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import {show, hide} from 'utils/loading/loading.reducer';

function Dashboard() {

  const [isDemo, setIsDemo] = useState(false);
  
  const dispatch = useDispatch();

  const btnCb = () => {
    console.log('click');
    setIsDemo(!isDemo);
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
        !isDemo && <div className="d-flex">
          <div className="w-50 h-500 p-20">
            <LineChart/>
          </div>
          <div className="w-50 h-500 p-20">
            <PieChart/>
          </div>
        </div>
      }
      {
        isDemo && <Demo/>
      }
    </>
  )
}
export default Dashboard;
