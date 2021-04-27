import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Page from '../components/Page'
import Detail from '../demos/Detail'

const DemoDetail = () => {
    
    const {slug} = useParams()
    const [loading,setLoading] = useState(false)
    const [demo,setDemo] = useState({})

    useEffect(()=>{
        setLoading(true)
        axios.get(`/api/demo/${slug}`)
        .then(({data})=>{
            const [demo] = data
            setDemo(demo)
            setLoading(false)
        })
    },[])

    return (
        <Page>
            {loading
            ? <p>Cargando detalles...</p>
            : <Detail demo={demo}/>}
        </Page>
    )
}

export default DemoDetail
