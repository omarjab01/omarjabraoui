'use client'

import Link from "next/link"
import { useRef } from "react"
import {RxHamburgerMenu} from 'react-icons/rx'


export const Sidebar = ({sidebarRef, toggleSidebar}) => {


    return (
        <aside className="sidebar" ref={sidebarRef}>
            <div className="header">
                <Link href="/">Omar Jabraoui</Link>
                <RxHamburgerMenu onClick={toggleSidebar} className="hamburger" />
            </div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/notes">Notes</Link>
                <Link href="/">Tutorials</Link>
            </nav>
            <div className="footer">
                Copyright
            </div>
        </aside>
  )
}
