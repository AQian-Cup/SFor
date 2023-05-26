export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const user = await useMongodb("SFor", "user").getItem({
    id: Number(query.id),
  });
  const dbEvent = await useMongodb("SFor", "event").getItem(
    {
      id: Number(event.context.params?.id),
    },
  );
  user?.finished.push(dbEvent?.id);
  const update = {
    credit: user?.credit + dbEvent?.credit,
    finished: user?.finished,
  };
  return !!(await useMongodb("SFor", "user").setItem(
    {
      id: Number(query.id),
    },
    update,
  ));
});
