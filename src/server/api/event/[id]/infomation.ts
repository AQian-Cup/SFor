interface infomationType {
  images: Array<string>;
  moreMessage: {
    university: string;
    college: string;
    eventName: string;
    credit: number;
    startTime: string;
    endTime: string;
  };
  introdution: string;
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
  } as infomationType;
});
