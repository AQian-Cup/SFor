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
