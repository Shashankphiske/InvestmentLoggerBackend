import z from "zod";

const tradeCreateSchema = z.object({
    body : z.object({
        name : z.string(),
        buyval : z.number(),
        date : z.date(),
        buytime : z.number(),
        sellval : z.number(),
        selltime : z.number(),
        quantity : z.number(),
    }),

    cookies : z.object({
        token : z.string()
    })
});

const tradeDeleteSchema = z.object({
    body : z.object({
        id : z.string()
    })
})

export { tradeCreateSchema, tradeDeleteSchema };