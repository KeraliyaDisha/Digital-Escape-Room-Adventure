import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createSchema } from "./graphQl/schema";
import { prisma } from "./config/db";
import cors from "cors"

const server = async () => {
  try {
    const app = express();    
    app.use(cors({
      origin: "*",
      credentials: true,
    }));
    
    const schema = await createSchema();

    const apolloServer = new ApolloServer({
      schema,
      introspection: true,
      context: ({ req }) => ({
        req,
        prisma,
      }),
    });

    await apolloServer.start();
    
    app.use(express.json()); 

    apolloServer.applyMiddleware({ app });

    const PORT = 4000;
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}/graphql`);
    });

  } catch (error) {
    console.error("Server startup error:", error);
  }
};

server();
