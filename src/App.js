import React from 'react'
import Teammate from './components/Teammate'
import { team } from './assets/data'

export default function App() {
  const teammates = team.map(teammate => {
    return (
      <Teammate 
        name={teammate.fullName}
        title={teammate.title}
        school={teammate.school}
        quote="yeet" 
      />
    )
  })

  return (
    <div style={styles.container}>
      {teammates}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}