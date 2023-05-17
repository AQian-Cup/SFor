export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const count = await useMongodb(
    "SFor",
    "user",
  ).collectionOrigin.countDocuments();
  return !!(await useMongodb("SFor", "user").setItem({
    id: count + 1,
    email: query.email,
    username: query.username,
    password: query.password,
  }));
});
