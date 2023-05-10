import { useMongodb } from "../storage";

export const hasUser = async (email: string) => {
  return await useMongodb("SFor", "user").hasItem({
    email,
  });
};

export const authUser = async (
  email: string,
  password: string,
) => {
  const user = await useMongodb("SFor", "user").getItem({
    email,
  });
  if (password !== user?.password) {
    return null;
  }
  return user;
};
