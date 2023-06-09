import { WithId } from "mongodb";

interface messageType extends WithId<Document> {
  id: number;
  content: string;
  source: sourceType;
}

interface sourceType {
  id: number;
  name: string;
  avatar: string;
}

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id);
  const dbEvent = await useMongodb("SFor", "event").getItem(
    { id },
  );
  if (!dbEvent) {
    throw createError({
      statusCode: 400,
      statusMessage: "请输入合法的id",
    });
  }
  return (await getEventMessages(
    dbEvent.messages,
  )) as Array<messageType>;
});
