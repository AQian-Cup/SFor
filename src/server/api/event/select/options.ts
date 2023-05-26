export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  if (!query.field) {
    throw createError({
      statusCode: 400,
      statusMessage: "请输入合法的query",
    });
  }
  return (await getOptions(
    query.field.toString(),
  )) as Array<string>;
});
