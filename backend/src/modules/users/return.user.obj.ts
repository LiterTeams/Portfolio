import { Prisma } from "@prisma/client";

export const returnUserObj:Prisma.UserSelect = {
    id: true,
    nickname: true,
    email: true,
    privilege: true,
    blocking: true,
    created_at: true,
}