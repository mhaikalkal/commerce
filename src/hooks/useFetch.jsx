import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest"

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      // populate=* adalah ambil semua data dari strapi, sama strapi biasa diblock alasan keamanan
      try{
        setLoading(true)
        const res = await makeRequest.get(url)
          // karena pas di console log, ada data didalem data.
          setData(res.data.data) 
      } catch(err) {
        setError(true)
      }

      setLoading(false)
    }

    // panggil data
    fetchData()
  }, [url])

  return {loading, data, error}
}

export default useFetch