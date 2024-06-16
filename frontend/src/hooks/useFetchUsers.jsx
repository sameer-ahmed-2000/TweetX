import { useEffect } from 'react';
import axiosInstance from '../functions/axiosInstance';
import { useAddUser } from '../functions/userAction';

export const useFetchUsers = (endpoint) => {
  const addUser = useAddUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get(endpoint);
        const users = response.data;
        users.forEach(user => {
          addUser({
            _id: user._id,
            fullName: user.fullName,
            isFollowing: user.isFollowing,
            followingCount: user.followingCount,
          });
        });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [endpoint, addUser]);
};

