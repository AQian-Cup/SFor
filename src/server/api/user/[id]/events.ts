import { WithId } from "mongodb";

interface eventType extends WithId<Document> {
  name: string;
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
  return (
    Number(Number(getQuery(event).kind))
      ? await getCreated(user.created)
      : await getParticipated(user.participated)
  ) as Array<eventType>;
});
