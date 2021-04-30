import Curso from "../models/CursoModel"
import mongoose from "mongoose"
import Total from "../models/TotalModel"

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
        const {title,price,cant} = req.body
        const curso = await Curso.create({title,price,cant,created_at:Date(),updated_at:Date()})
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

export const addConceptToTotal = async (req,res) => {
    try {
        const {price,_id,cant} = req.body
        const resultado_update = await Total.updateOne({},{
            $inc : {
                amount : price
            },
            $addToSet : {
                concepts : {price,_id,cant}
            }
        })
        if(resultado_update.ok){
            res.json({data:"OK"})
        }else{
            throw new Error("No se pudo actualizar el total")
        }
    } catch (e) {
        res.status(500).json({e})
    }
}

export const getTotal = async (req,res) => {
    try {
        const total = await Total.findOne({})
        res.json(total)
    } catch (e) {
        res.status(500).json({e})
    }
}