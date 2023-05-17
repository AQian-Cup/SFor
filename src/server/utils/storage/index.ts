import { MongoClient } from "mongodb";

export const useMongodb = (
  dbName: string,
  collectionName: string,
) => {
  const mongoClient = new MongoClient(
    "mongodb://localhost:27017/",
  );
  const collection = mongoClient
    .db(dbName)
    .collection(collectionName);
  return {
    async hasItem(filter: object) {
      const result = await collection.findOne(filter);
      return !!result;
    },
    async getItem(filter: object) {
      const document = await collection.findOne(filter);
      return document ?? null;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async setItem(filter: object, update: object = {}) {
      return await collection.findOneAndUpdate(
        filter,
        {
          $set: update,
        },
        { upsert: true, returnDocument: "after" },
      );
    },
    async removeItem(filter: object) {
      return await collection.deleteOne(filter);
    },
    async clear() {
      await collection.deleteMany({});
    },
    collectionOrigin: collection,
  };
};
