export const getOptions = async (field: string) => {
  return await useMongodb(
    "SFor",
    "event",
  ).collectionOrigin.distinct(field);
};
