import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  const body = await readBody(event);
  if (
    Number(event.context.params?.id) !==
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (session?.user as any).id
  ) {
    throw createError({
      statusCode: 403,
      statusMessage: "没有足够的权限",
    });
  }
  return await pushEvent(
    Number(event.context.params?.id),
    Number(body.eventId),
  );
});
