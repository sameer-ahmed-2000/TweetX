import UserList from './UserList';
import { useFetchUsers } from '../hooks/useFetchUsers';
import React from 'react';
import ReactDOM from 'react-dom';

export function User(){
  useFetchUsers('user/users');
  return (
    <div className='py-12'>
      <UserList />
    </div>
  );
}


