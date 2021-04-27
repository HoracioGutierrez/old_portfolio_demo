import axios from 'axios'
import React , {useEffect} from 'react'
import Page from '../components/Page'

const Demos = () => {

    useEffect(()=>{
        axios.get("/api/demos")
        .then(res=>{
            console.log(res)
        })
    },[])

    return (
        <Page title="Demos">
            Demos
        </Page>
    )
}

export default Demos
