import React from 'react'
import { Link, useMatch } from 'react-router-dom'

function CustomLink( {children, to, ...props} ) {
    const match = useMatch({
      path: to,
      end: to.length === 1
    })
  return (
    <Link
        to = {to}
        {...props}
        style = {{
            color: match ? 'greenyellow' : 'white',
            cursor: 'pointer',
            // padding: '0 10px',
            textDecoration: 'none'
        }}
    >
        {children}
    </Link>
  )
}

export default CustomLink