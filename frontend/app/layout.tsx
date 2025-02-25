"use client";
import "./globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";
import ParticlesBackground from "../components/Background";
import Navbar from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    const token = Cookies.get("token");
    return {
      headers: {
        ...headers,
        Authorization: token ? `${token}` : "",
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  return (
    <html lang="en">
      <body className="bg-[#243642] overflow-y-scroll overflow-x-hidden">
        <ParticlesBackground />
        <ApolloProvider client={client}>
        <Navbar />
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
