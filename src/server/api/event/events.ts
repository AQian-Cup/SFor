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
  const filter = {} as {
    university?: string;
    college?: string;
  };
  if (query.university) {
    filter.university = query.university.toString();
  }
  if (query.college) {
    filter.college = query.college.toString();
  }
  return (await getEvents(filter)) as Array<eventType>;
});
