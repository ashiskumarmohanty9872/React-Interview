import React from 'react'
import DataComponents from './Datacomponents'

function WithLoading(WrappedComponents) {
  return function ({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Loading...</p>
    }
    return <WrappedComponents {...props} />
  }
}

const EnhancedData = WithLoading(DataComponents)
export default EnhancedData;
