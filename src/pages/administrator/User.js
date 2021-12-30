import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setData } from './user.reducer';

function User() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducer.data);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
  //     console.log(res.data);
  //     dispatch(setData(res.data));
  //   });
  // }, []);

  return (
    <>
      <h1>This is User page</h1>
      <ul>
        {
          data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </>
  )
}
export default User;