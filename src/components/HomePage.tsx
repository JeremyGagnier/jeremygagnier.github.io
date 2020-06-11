import * as React from "react"
import PageContainer from "./PageContainer"
import { Images } from "../resources/Images"

const DISPLAY_PIC_STYLE = {
    borderRadius: "100%",
    width: "100%"
}

const ICON_ROW_STYLE = {
    margin: "1rem",
    fontAlign: "center"
}

const BUTTON_STYLE = {
    width: "100%"
}

const DESCRIPTION_STYLE = {
    position: "absolute",
    top: "50%",
    transform: "translate(0%, -50%)",
    margin: "0 0 0 1rem",
}

const GITHUB_LINK = "https://www.github.com/jeremygagnier"
const LINKEDIN_LINK = "https://www.linkedin.com/in/jeremy-gagnier-88b4636a/"
const RESUME_LINK = "https://docs.google.com/document/d/1dor1cl4nSqzzVgshACfLEMBhpx9W5NHYU8BLsS-A8-I/edit?usp=sharing"

export default class HomePage extends React.Component
{
    render()
    {
        return (
            <div className="container">
                <h1>CURRENTLY UNDER CONSTRUCTION</h1>



                <div className="row">
                    <div className="column column-25">
                        <div className="row">
                            <img style={DISPLAY_PIC_STYLE} src={Images.ME} />
                        </div>
                        <div className="row" style={ICON_ROW_STYLE}>
                            <div className="column">
                                <a href={GITHUB_LINK} title="Jeremy Gagnier's Github">
                                    <i className="fab fa-github-square fa-3x" />
                                </a>
                            </div>
                            <div className="column">
                                <a href={LINKEDIN_LINK} title="Jeremy Gagnier's Linkedin">
                                    <i className="fab fa-linkedin fa-3x" />
                                </a>
                            </div>
                            <div className="column">
                                <a href={RESUME_LINK} title="Jeremy Gagnier's Resume">
                                    <i className="fas fa-file-alt fa-3x" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div style={DESCRIPTION_STYLE}>
                            <p>Hi, I'm Jeremy.</p>
                            <p>
                                I have over 30 self-started projects spanning many areas of computer science. My current
                                focuses are listed below, select one to see my projects in that area!
                            </p>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="column">
                        <a className="button" style={BUTTON_STYLE} href="#machine-learning">Machine Learning</a>
                    </div>
                    <div className="column">
                        <a className="button" style={BUTTON_STYLE} href="#programming-languages">Programming Languages</a>
                    </div>
                    <div className="column">
                        <a className="button" style={BUTTON_STYLE} href="#video-games">Video Games</a>
                    </div>
                    <div className="column">
                        <a className="button" style={BUTTON_STYLE} href="#computer-graphics">Computer Graphics</a>
                    </div>
                </div>
            </div>
        )
    }
}