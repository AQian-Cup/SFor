import { WithId } from "mongodb";

interface eventType extends WithId<Document> {
  id: number;
  type: string;
  title: string;
  content: string;
  source: {
    id: number;
    avatar: string;
    name: string;
  };
}

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id);
  const user = await getUser(id);
  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: "请输入合法的id",
    });
  }
  return (await getUserMessage(
    user.messages,
  )) as Array<eventType>;
});
