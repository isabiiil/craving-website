import React from 'react'

export default function Teammate({ name, title, school, quote }) {
  const isQuote = quote;
  return (
    <div style={styles.container}>
      <p>{name}</p>
      <p>{title}</p>
      <p>{school}</p>
      {isQuote ? <p>{quote}</p> : null}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}