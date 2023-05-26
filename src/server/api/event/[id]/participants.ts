export default defineEventHandler(async (event) => {
  const dbEvent = await useMongodb("SFor", "event").getItem(
    {
      id: Number(event.context.params?.id),
    },
  );
  if (!dbEvent) {
    throw createError({
      statusCode: 400,
      statusMessage: "请输入合法的id",
    });
  }
  const participants = await getParticipants(
    dbEvent.participants,
  );
  participants.forEach((i) => {
    if (
      (i.finished as Array<number>).includes(
        Number(event.context.params?.id),
      )
    ) {
      i.isFinish = true;
    }
  });
  return participants;
});
