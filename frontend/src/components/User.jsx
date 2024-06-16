import UserList from './UserList';
import { useFetchUsers } from '../hooks/useFetchUsers';

export function User(){
  useFetchUsers('user/users');
  return (
    <div className='py-12'>
      <UserList />
    </div>
  );
}


