'use client'

import React, { useRef } from 'react'
import { Sidebar } from './Sidebar'
import {RxHamburgerMenu} from 'react-icons/rx'

const Layout = ({children}) => {

  const sidebarRef = useRef();
  const hamburgerRef = useRef();


  const toggleSidebar = () => {
    sidebarRef.current.classList.toggle('hide')
    hamburgerRef.current.querySelector('.hamburger.nav').classList.toggle('hide')
  }

  return (
    <div className='layout'>
        <Sidebar sidebarRef={sidebarRef} toggleSidebar={toggleSidebar}/>
        <main>
          <div ref={hamburgerRef}>
            <RxHamburgerMenu onClick={toggleSidebar} className="hamburger nav hide" />
          </div>
          <section>
            {children}
          </section>
        </main>
    </div>
  )
}

export default Layout