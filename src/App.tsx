import { useState, useEffect } from 'react'

import { URL, TOKEN } from './conf'
import './App.css'

function App() {
  const [values, setValues] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(URL + '/api/products', {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
      .then((r) => r.json())
      .then((v) => {
        setLoading(false)
        setValues(v.data)
      })
  }, [])
  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          {values.map((value) => (
            <div key={value.id}>
              <div>{value.attributes.name}</div>
              <div>{value.attributes.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
