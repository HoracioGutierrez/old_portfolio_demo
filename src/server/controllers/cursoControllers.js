import Curso from "../models/CursoModel"

export const createCurso = async (req,res) => {
    try {
        const {title,price} = req.body
        const curso = await Curso.create({title,price,created_at:Date(),updated_at:Date()})
        res.json(curso)
    } catch (e){
        res.status(500).json({e})
    }
}