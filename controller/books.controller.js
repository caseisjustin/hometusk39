import query from "../services/book.service.js"
export const getAllbooks = async (req, res)=>{
    try {
        const books = await query.getAllbooks
        res.status(200).send("ok")
    } catch (err) {
        console.log("error")
    }
}
