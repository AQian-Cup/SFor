interface messageType {
  id: number;
  source: {
    avatar?: "";
    id: number;
    name: string;
  };
  type?: string;
  title?: string;
  content: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const query = getQuery(event);
  const count = await useMongodb(
    "SFor",
    "message",
  ).collectionOrigin.countDocuments();
  const user = await useMongodb("SFor", "user").getItem({
    id: Number(query.sourceId),
  });
  const messageObject: messageType = {
    id: count + 1,
    source: {
      id: user?.id,
      name: user?.name,
      avatar: user?.avatar,
    },
    content: body.input,
    type: "user",
  };
  if (query.replyUserId) {
    await pushUserMessage(
      Number(query.replyUserId),
      count + 1,
    );
  }
  await pushEventMessage(Number(query.eventId), count + 1);
  return await useMongodb("SFor", "message").setItem(
    messageObject,
  );
});
