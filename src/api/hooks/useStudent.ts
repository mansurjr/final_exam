import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api";
import type { User } from "../../types";

export const useUsers = () => {
  const client = useQueryClient();

  const useGetUsers = () => useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const { data } = await api.get<User[]>("/user");
        return data;
      } catch (error: any) {
        console.log(error);
        throw error;
      }
    },
  });

  const createUser = useMutation<User, Error, Omit<User, "id">>({
    mutationFn: async (newUser) => {
      const { data } = await api.post<User>("/user", newUser);
      return data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  const updateUser = useMutation<User, Error, User>({
    mutationFn: async (user) => {
      const { data } = await api.put<User>(`/user/${user.id}`, user);
      return data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  const deleteUser = useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/user/${id}`);
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return { useGetUsers, createUser, updateUser, deleteUser };
};
