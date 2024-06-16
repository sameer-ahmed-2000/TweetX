import React from 'react';
import { useRecoilValue } from 'recoil';
import { userUsedIdsAtom } from '../atoms/UserDetailsAtomFamily';
import UserItem from '../components/UserItem';

function UserList() {
    const userIds = useRecoilValue(userUsedIdsAtom);
    return (
        <div>
        {userIds.map(id => (
            <UserItem key={id} userId={id} />
        ))}
        </div>
    );
}
export default UserList;