import Demo from "../models/DemoModel"

export const getDemoList = async (req,res) => {
    try{
        const demos = await Demo.find({})
        res.json(demos)
    }catch(e){
        res.status(500).json({e})
    }
}

export const getDemo = async (req,res) => {
    try{
        const {slug} = req.params
        const demo = await Demo.find({slug})
        res.json(demo)
    }catch(e){
        res.status(500).json({e})
    }
}