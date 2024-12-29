import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    const prisma = new PrismaClient().$extends({
        query: {
            loan: {
                async $allOperations({ model, operation, args, query }) {
                    if (operation === 'findMany' || operation == "findUnique") {
                        args.where = { ...args.where, deletedAt: null }
                    }
                    return query(args)
                }
            },
            collection: {
                async $allOperations({ model, operation, args, query }) {
                    if (operation === 'findMany' || operation == "findUnique") {
                        args.where = { ...args.where, deletedAt: null }
                    }
                    return query(args)
                }
            },
            member: {
                async $allOperations({ model, operation, args, query }) {
                    if (operation === 'findMany' || operation == "findUnique") {
                        args.where = { ...args.where, deletedAt: null }
                    }
                    return query(args)
                }
            }
        }
    })
    return prisma
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClientSingleton | undefined
}

export const prisma = globalForPrisma.prisma || prismaClientSingleton()