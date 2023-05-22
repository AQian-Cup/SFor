interface infomationType {
  images: Array<string>;
  moreMessage: {
    university: string;
    college: string;
    credit: number;
    startTime: string;
    endTime: string;
  };
  introdution: string;
  source: {
    id: number;
    name: string;
  };
  id: number;
}

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
  return {
    images: dbEvent?.images,
    moreMessage: dbEvent?.moreMessage,
    introdution: dbEvent?.introdution,
    id: dbEvent?.id,
    source: dbEvent.source,
  } as infomationType;
});
