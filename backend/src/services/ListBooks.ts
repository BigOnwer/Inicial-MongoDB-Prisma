import prismaClient from "../prisma";

export class ListBooksService{
    async execute() {
        const books = await prismaClient.livros.findMany()

        return books
    }
}