interface infomationType {
  images: Array<string>;
  university: string;
  college: string;
  credit: number;
  startTime: string;
  endTime: string;
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
    introdution: dbEvent?.introdution,
    university: dbEvent?.university,
    college: dbEvent?.college,
    credit: dbEvent?.credit,
    startTime: dbEvent?.startTime,
    endTime: dbEvent?.endTime,
    id: dbEvent?.id,
    source: dbEvent.source,
  } as infomationType;
});
