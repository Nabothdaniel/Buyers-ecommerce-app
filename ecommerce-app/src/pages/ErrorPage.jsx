import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {

    const err = useRouteError();
  return (
    <div className=''>
 <h1 className="text-2xl">Error page not found</h1>

 <p><i>{err.statusText || err.message}</i> </p>
    </div>
  )
}

export default ErrorPage