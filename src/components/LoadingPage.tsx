import * as React from "react"
import { initResources } from "./../resources/ImageManager"
import HomePage from "./HomePage"

const LOADING_PAGE_STYLE = {
    left: "0px",
    top: "0px",
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "#dfdfdf"
}
const LOADING_TEXT_STYLE = {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "32px"
}

const MAX_DOTS = 3
const DOT_DELAY_MS = 700

interface LoadingPageState
{
    loaded: boolean
    dotCount: number
}

export default class LoadingPage extends React.Component<{}, LoadingPageState>
{
    constructor(props: object)
    {
        super(props)
        this.state = { loaded: false, dotCount: 0 }
    }

    changeDotCount()
    {
        this.setState({ dotCount: (this.state.dotCount + 1) % (MAX_DOTS + 1) })
        setTimeout(this.changeDotCount.bind(this), DOT_DELAY_MS)
    }

    componentDidMount()
    {
        initResources(this.setState.bind({ loaded: true }))
        setTimeout(this.changeDotCount.bind(this), DOT_DELAY_MS / 2)
    }

    render()
    {
        const loadingView = (
            <div style={LOADING_PAGE_STYLE}>
                <div style={LOADING_TEXT_STYLE}>
                    Loading{".".repeat(this.state.dotCount)}
                </div>
            </div>)
        const pageView = <HomePage />
        return (this.state.loaded ? pageView : loadingView)
    }
}