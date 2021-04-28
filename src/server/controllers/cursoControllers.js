import Curso from "../models/CursoModel"
import mongoose from "mongoose"

export const getAllCursos = async (req,res) => {
    try {
        const cursos = await Curso.find({})
        res.json(cursos)
    } catch (e) {
        res.status(500).json({e})
    }
}

export const createCurso = async (req,res) => {
    try {
        const {title,price} = req.body
        const curso = await Curso.create({title,price,created_at:Date(),updated_at:Date()})
        res.json(curso)
    } catch (e){
        res.status(500).json({e})
    }
}

export const deleteCurso = async (req,res) => {
    try {
        const {_id} = req.params
        const resultado_borrado = await Curso.deleteOne({_id:mongoose.Types.ObjectId(_id)})
        const resultado_pedido = await Curso.find({})
        if(res.deletedCount = 1){
            res.json(resultado_pedido)
        }
    } catch (e) {
        res.status(500).json({e})
    }
}