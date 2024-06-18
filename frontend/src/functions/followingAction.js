// userActions.js

import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { followingStateFamily, followingUsedIdsAtom } from '../atoms/FollowingDetails';


export const useAddfollowing = () => {
    const addfollowing = useRecoilCallback(
        ({ set,snapshot }) =>
        async(user) => {
            const id = user._id;
            const usedIds=await snapshot.getPromise(followingUsedIdsAtom);
            if(!usedIds.includes(id)){
                set(followingStateFamily(id), user);
                set(followingUsedIdsAtom, (users) => [...users, id]);
            }
        },
        []
    );
    return addfollowing;
    };

    export const useRemoveFollowing = () => {
    const setFollowing = useSetRecoilState(followingUsedIdsAtom);
    const removeFollowing = (id) =>
        setFollowing((users) => users.filter((userId) => userId !== id));
    
    return removeFollowing;
};
