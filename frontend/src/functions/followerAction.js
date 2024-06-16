// userActions.js

import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { followerStateFamily, followerUsedIdsAtom } from '../atoms/FollowerDetails';


export const useAddFollower = () => {
    const addFollower = useRecoilCallback(
        ({ set,snapshot }) =>
        async(user) => {
            const id = user._id;
            const usedIds=await snapshot.getPromise(followerUsedIdsAtom);
            if(!usedIds.includes(id)){
                set(followerStateFamily(id), user);
                set(followerUsedIdsAtom, (users) => [...users, id]);
            }else{
                console.warn(`User with ID ${id} already exists`)
            }
        },
        []
    );
    return addFollower;
    };

    export const useRemoveFollower = () => {
    const setFollowers = useSetRecoilState(followerUsedIdsAtom);
    const removeFollower = (id) =>
        setFollowers((users) => users.filter((userId) => userId !== id));
    
    return removeFollower;
};
