import * as React from "react"
import PageContainer from "./PageContainer"

export default class HomePage extends React.Component
{
    render()
    {
        return (
            <PageContainer>
                <p>Welcome, select a concept below to see what projects I have done in this area.</p>
                <p>Machine Learning</p>
                <p>Programming Languages</p>
                <p>Video Games</p>
                <p>Computer Graphics</p>
            </PageContainer>
        )
    }
}