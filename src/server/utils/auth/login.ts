interface userType {
  username: string;
  password: string;
}

export const hasUser = async (email: string) => {
  return await useStorage("user").hasItem(email);
};

export const authUser = async (
  email: string,
  password: string,
) => {
  const user = await useStorage("user").getItem(email);
  if (password !== (user as userType)?.password) {
    return false;
  }
  return true;
};
