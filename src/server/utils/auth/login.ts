export const hasUser = async (id: number) => {
  return await useMongodb("SFor", "user").hasItem({
    id,
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
