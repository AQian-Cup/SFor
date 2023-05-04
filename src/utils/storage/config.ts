const connectionString = "mongodb://localhost:27017/";
const databaseName = "SFor";

export default {
  user: {
    driver: "mongodb",
    connectionString,
    databaseName,
    collectionName: "user",
  },
  event: {
    driver: "mongodb",
    connectionString,
    databaseName,
    collectionName: "event",
  },
};
