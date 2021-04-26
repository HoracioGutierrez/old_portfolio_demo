import path from "path"
import fs from 'fs'
import cheerio from 'cheerio'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'
import App from "../../client/layout/App"
import template from "../views/mainView"

const templatePath = path.join(__dirname, 'public', 'index.html')
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString()

export const renderStaticHtml = (req,res) => {
    const $template = cheerio.load(HTML_TEMPLATE)
    const context = {}
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
    $template("#root").html(app)
    res.send($template.html())
}