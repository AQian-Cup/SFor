export const getParticipated = async (
  participated: Array<number>,
) => {
  return await useMongodb("SFor", "event")
    .collectionOrigin.find({
      id: { $in: participated },
    })
    .toArray();
};

export const getCreated = async (
  created: Array<number>,
) => {
  return await useMongodb("SFor", "event")
    .collectionOrigin.find({
      id: { $in: created },
    })
    .toArray();
};
