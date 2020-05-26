import * as React from "react"
import { Link } from "react-router-dom"

export interface NavbarProps {}

export default class Navbar extends React.Component<NavbarProps, {}>
{
    render()
    {
        const links: JSX.Element = (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/a">A</Link></li>
                <li><Link to="/b">B</Link></li>
            </ul>)

        return <div><nav>{links}</nav></div>
    }
}