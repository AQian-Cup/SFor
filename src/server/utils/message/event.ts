export const pushEventMessage = async (
  id: number,
  messageId: number,
) => {
  return !!(await useMongodb(
    "SFor",
    "event",
  ).collectionOrigin.updateOne(
    { id },
    { $push: { messages: messageId } },
  ));
};

export const getEventMessages = async (
  messagesId: Array<number>,
) => {
  return await useMongodb("SFor", "message")
    .collectionOrigin.find({ id: { $in: messagesId } })
    .toArray();
};
