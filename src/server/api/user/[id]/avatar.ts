import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  if (
    Number(event.context.params?.id) !==
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (session?.user as any).id
  ) {
    throw createError({
      statusCode: 403,
      statusMessage: "没有足够的权限",
    });
  }
  const user = await getUser(
    Number(event.context.params?.id),
  );
  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: "请输入合法的id",
    });
  }
  const { files } = await readFiles(event);
  const filename: string = user.id;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fianlFilename = await writeFile(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (files as any).file[0],
    filename,
    "user",
  );
  return await useMongodb("SFor", "user").setItem(
    {
      id: Number(event.context.params?.id),
    },
    { avatar: fianlFilename },
  );
});
