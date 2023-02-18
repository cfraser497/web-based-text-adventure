import { getChapter } from "./file_reader.ts";

//Create server on port 5500
const server = Deno.listen({ port: 5500 });
console.log("Server listening at http://localhost:5500");


// Whenever a server request is made, this loop runs (like an infinite loop)
for await (const conn: Deno.Conn of server) {
    // In order to not be blocking, we need to handle each connection individually
    // without awaiting the function
    serveHttp(conn);
}


// This function handles every server request
async function serveHttp(conn: Deno.Conn) {
    // This "upgrades" a network connection into an HTTP connection.
    const httpConn = Deno.serveHttp(conn);
    // Each request sent over the HTTP connection will be yielded as an async
    // iterator from the HTTP connection.
    for await (const requestEvent of httpConn) {
      // The native HTTP server uses the web standard `Request` and `Response`
      // objects.
      const body = await getChapter("test");
      // The requestEvent's `.respondWith()` method is how we send the response
      // back to the client.
      requestEvent.respondWith(
        new Response(body, {
          status: 200,
        }),
      );
    }
  }