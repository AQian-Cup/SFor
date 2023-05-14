interface profileType {
  name: string;
  college: string;
  university: string;
  classGroup: string;
  admissionTime: number;
  age: number;
  avatar: string;
}

export default defineEventHandler(async (event) => {
  const user = await getUser(
    Number(event.context.params?.id),
  );
  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: "请输入合法的id",
    });
  }
  const {
    name,
    college,
    university,
    classGroup,
    admissionTime,
    age,
    avatar,
  } = user;
  return {
    name,
    college,
    university,
    classGroup,
    admissionTime,
    age,
    avatar,
  } as profileType;
});
