import React, {ReactNode} from 'react'

const RoutLayout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      {children}
      Footer
    </main>
  )
}

export default RoutLayout
