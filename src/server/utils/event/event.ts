export const pushEvent = async (
  id: number,
  eventId: number,
) => {
  return !!(await useMongodb(
    "SFor",
    "user",
  ).collectionOrigin.updateOne(
    { id },
    { $push: { participated: eventId } },
  ));
};

export const hasEvent = async (
  id: number,
  eventId: number,
) => {
  return !!(await useMongodb("SFor", "user").hasItem({
    id,
    participated: {
      $in: [eventId],
    },
  }));
};

export const getEvents = async (filter: object) => {
  return await useMongodb("SFor", "event")
    .collectionOrigin.find(filter)
    .toArray();
};
