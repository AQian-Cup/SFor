import { WithId } from "mongodb";

interface eventType extends WithId<Document> {
  id: number;
  name: string;
  source: {
    id: number;
    name: string;
  };
  introdution: string;
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  return (await getEvents(query)) as Array<eventType>;
});
