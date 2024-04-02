import React from 'react'
import { Suspense } from 'react'
import { lazy } from 'react';


const LazyComponent = lazy(() => import('./components/lazyLoading/lazyLoading'));

export default function lazyLoadingComponent() {
  return (
    <div>
        <Suspense fallback={<p>LOADING ....</p>}>
            <LazyComponent/>
        </Suspense>
    </div>
  )
}
