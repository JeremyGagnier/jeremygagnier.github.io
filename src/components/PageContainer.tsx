import * as React from "react"

const PAGE_STYLE = { textAlign: "center" }
const CONTAINER_STYLE = { width: "800px", textAlign: "left", display: "inline-block" }

export default class PageContainer extends React.Component
{
    render()
    {
        return (
            <div className="page" style={PAGE_STYLE}>
                <div className="container" style={CONTAINER_STYLE}>
                    {this.props.children}
                </div>
            </div>)
    }
}