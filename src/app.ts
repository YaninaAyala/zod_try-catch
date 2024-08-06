import express, { json } from "express"
import { validateProduct } from "./schemas/products"

const app = express()

app.use(json())

app.post("/products", (req, res) => {
    try {
        const result = validateProduct(req.body)

        if (!result.success) return res.status(400).json({
            error: result.error
        })

        res.status(201).json({
            message: "Producto creado",
            data: result.data
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

export default app

