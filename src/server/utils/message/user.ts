export const getUserMessage = async (
  messages: Array<number>,
) => {
  return await useMongodb("SFor", "message")
    .collectionOrigin.find({
      id: { $in: messages },
    })
    .toArray();
};

export const pushUserMessage = async (
  id: number,
  messageId: number,
) => {
  return !!(await useMongodb(
    "SFor",
    "user",
  ).collectionOrigin.updateOne(
    { id },
    { $push: { messages: messageId } },
  ));
};
