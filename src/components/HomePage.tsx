import * as React from "react"
import PageContainer from "./PageContainer"
import { Images } from "../resources/Images"

const DISPLAY_PIC_STYLE = {
    borderRadius: "100%",
    width: "200px",
    height: "200px"
}

const INTEREST_ICON_STYLE = {
    width: "200px"
}

export default class HomePage extends React.Component
{
    render()
    {
        return (
            <PageContainer>
                <h1>CURRENTLY UNDER CONSTRUCTION</h1>
                <img style={DISPLAY_PIC_STYLE} src={Images.ME} />
                <p>Welcome, select a concept below to see what projects I have done in this area.</p>
                <table>
                    <tr>
                        <th><a><img style={INTEREST_ICON_STYLE} src={Images.MACHINE_LEARNING} /></a></th>
                    </tr>
                </table>
                <p>Machine Learning</p>
                <p>Programming Languages</p>
                <p>Video Games</p>
                <p>Computer Graphics</p>
            </PageContainer>
        )
    }
}