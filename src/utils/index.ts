import type { User } from "../types";

export const UseGetUsersByGender = (data: User[], gender: string) => {
  return data?.filter((user) => user.gender == gender);
};
