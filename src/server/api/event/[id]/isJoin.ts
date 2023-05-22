export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  return hasEvent(
    Number(event.context.params?.id),
    Number(query.eventId),
  );
});
