export const getUserMessage = async (
  message: Array<number>,
) => {
  return await useMongodb("SFor", "message")
    .collectionOrigin.find({
      id: { $in: message },
    })
    .toArray();
};
