export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const count = await useMongodb(
    "SFor",
    "event",
  ).collectionOrigin.countDocuments();
  return await useMongodb("SFor", "event").setItem({
    id: count + 1,
    university: body.university,
    college: body.college,
    credit: body.credit,
    startTime: body.startTime,
    endTime: body.endTime,
    introdution: body.introdution,
    paricipants: [],
    name: body.eventName,
    source: {
      name: body.name,
      id: body.id,
    },
    images: [],
    messages: [],
  });
});
