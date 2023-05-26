export default defineEventHandler(async (event) => {
  const { files } = await readFiles(event);
  const dbEvent = await useMongodb("SFor", "event").getItem(
    {
      id: Number(event.context.params?.id),
    },
  );
  const filename =
    event.context.params?.id +
    "_" +
    (dbEvent?.images as Array<string>).length;
  await writeFile(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (files as any).file[0],
    filename,
    "event",
  );
  dbEvent?.images.push(filename);
  return await useMongodb("SFor", "event").setItem(
    {
      id: Number(event.context.params?.id),
    },
    {
      images: dbEvent?.images,
    },
  );
});
