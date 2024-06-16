// userActions.js

import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { userStateFamily, userUsedIdsAtom } from '../atoms/UserDetailsAtomFamily';

export const useAddUser = () => {
    const addUser = useRecoilCallback(
        ({ set,snapshot }) =>
        async(user) => {
            const id = user._id;
            const usedIds=await snapshot.getPromise(userUsedIdsAtom);
            if(!usedIds.includes(id)){
                set(userStateFamily(id), user);
                set(userUsedIdsAtom, (users) => [...users, id]);
            }else{
                console.warn(`User with ID ${id} already exists`)
            }
        },
        []
    );
    return addUser;
    };

    export const useRemoveUser = () => {
    const setUsers = useSetRecoilState(userUsedIdsAtom);
    const removeUser = (id) =>
        setUsers((users) => users.filter((userId) => userId !== id));
    
    return removeUser;
};
