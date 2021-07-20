// Server
import { server, httpServer } from './init/server'

// Config
import { PORT } from './init/config'

httpServer.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
});