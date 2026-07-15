import Fastify from 'fastify'
import cors from '@fastify/cors'

const server = Fastify({ logger: true })

await server.register(cors, { origin: true })

server.get('/health', async () => ({ status: 'ok', timestamp: new Date().toISOString() }))

try {
  await server.listen({ port: Number(process.env.PORT) || 4000, host: '0.0.0.0' })
} catch (err) {
  server.log.error(err)
  process.exit(1)
}
