import Demo from "../models/DemoModel"

export const getDemoList = async (req,res) => {
    const demos = await Demo.find({})
    res.json(demos)
}