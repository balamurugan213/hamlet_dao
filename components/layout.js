import Navbar from './navbar'
import Footer from './footer'

import { Card, Button,Menu,Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


export default function Layout({ children }) {
return (
<>
<div style={{margin:'10px'}}>
    <Container fluid>
        <Navbar />
            <main>{children}</main>
        <Footer />
    </Container>
</div>
</>
)
}