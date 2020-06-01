import * as React from "react"
import { initResources } from "./../resources/ImageManager"
import HomePage from "./HomePage"

const LOADING_PAGE_STYLE = {
    left: "0px",
    top: "0px",
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "#000000"
}
const LOADING_TEXT_STYLE = {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "32px",
    color: "#ffffff"
}

const MAX_DOTS = 3
const DOT_DELAY_MS = 700
const MAX_FADE_FRAME = 30

interface LoadingPageState
{
    mounted: boolean
    loaded: boolean
    dotCount: number
    fadeFrame: number
    dotTimeout: number
}

export default class LoadingPage extends React.Component<{}, LoadingPageState>
{
    constructor(props: object)
    {
        super(props)
        this.state = { mounted: false, loaded: false, dotCount: 0, fadeFrame: 0, dotTimeout: 0 }
    }

    changeDotCount()
    {
        this.setState({
            dotCount: (this.state.dotCount + 1) % (MAX_DOTS + 1),
            dotTimeout: window.setTimeout(this.changeDotCount.bind(this), DOT_DELAY_MS) })
        
    }

    componentDidMount()
    {
        if (!this.state.mounted)
        {
            const stateChanges = {
                mounted: true,
                dotTimeout: window.setTimeout(this.changeDotCount.bind(this), DOT_DELAY_MS / 2),
                fadeFrame: 0
            }
            if (initResources(this.onLoaded.bind(this)))
            {
                stateChanges.fadeFrame = MAX_FADE_FRAME
            }
            this.setState(stateChanges)
        }
    }

    fade()
    {
        if (this.state.fadeFrame < MAX_FADE_FRAME)
        {
            this.setState({ fadeFrame: this.state.fadeFrame + 1 })
            window.setTimeout(this.fade.bind(this), 16)
        }
    }

    onLoaded()
    {
        window.clearTimeout(this.state.dotTimeout)
        window.setTimeout(this.fade.bind(this), 16)
        this.setState({ loaded: true })
    }

    render()
    {
        const loadingPageStyle = Object.assign({}, LOADING_PAGE_STYLE)
        if (this.state.fadeFrame > 20) {
            loadingPageStyle.backgroundColor = "#" + ((this.state.fadeFrame - 20) * 25).toString(16).repeat(3)
        }

        const loadingView = (
            <div style={loadingPageStyle}>
                <div style={LOADING_TEXT_STYLE}>
                    Loading{".".repeat(this.state.dotCount)}
                </div>
            </div>)
        const shouldShowPage = this.state.loaded && this.state.fadeFrame === MAX_FADE_FRAME
        return (shouldShowPage ? <HomePage /> : loadingView)
    }
}