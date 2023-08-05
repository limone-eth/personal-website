import {ReactNode} from 'react'
import {ReactMatrixAnimation} from "react-matrix-animation";

import Container from './Container'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Background animation */}
            <div className="fixed inset-0 opacity-30">
                <ReactMatrixAnimation tileSet={["🍋"]} tileSize={12}></ReactMatrixAnimation>
            </div>
            <main className="flex-grow relative z-10">
                <Container>{children}</Container>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
