import axios from 'axios'
import React , {useEffect, useState} from 'react'
import Page from '../components/Page'
import DemoItem from '../demos/DemoItem'

const Demos = () => {

    const [loading,setLoading] = useState(false)
    const [demos,setDemos] = useState([])

    useEffect(()=>{
        setLoading(true)
        axios.get("/api/demos")
        .then(({data})=>{
            setDemos(data)
            setLoading(false)
        })
    },[])

    return (
        <Page title="Demos">
            {loading?<p>Cargando Demos...</p>:null}
            <section id="demo-list">
                {demos.length
                ?demos.map(demo=> <DemoItem key={demo._id} demo={demo}/> )
                :null}
            </section>
        </Page>
    )
}

export default Demos
