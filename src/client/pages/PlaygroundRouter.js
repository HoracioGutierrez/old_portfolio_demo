import React from 'react'
import { useParams } from 'react-router'
import BudgetCounter from '../demos/BudgetCounter/BudgetCounter'

const components = {
    "3yePM" : BudgetCounter
}

const PlaygroundRouter = () => {

    const {slug} = useParams()
    const Component = components[slug]

    return <Component/>
}

export default PlaygroundRouter
