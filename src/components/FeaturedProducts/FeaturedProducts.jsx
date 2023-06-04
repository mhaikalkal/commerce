import React from 'react'
import Card from './../Card/Card'
import './FeaturedProducts.scss'
// import Items from '../../data/Items'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({type}) => {
  const {loading, data, error} = useFetch(`/products?populate=*&[filters][type][$eqi]=${type}`)

  // const [data, setData] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // populate=* adalah ambil semua data dari strapi, sama strapi biasa diblock alasan keamanan
  //     try{
  //       const res = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eqi]=${type}`, 
  //         {
  //           headers: {
  //             Authorization:"bearer " + process.env.REACT_APP_API_TOKEN
  //           },
  //         })
  //         // karena pas di console log, ada data didalem data.
  //         setData(res.data.data) 
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }

  //   // panggil data
  //   fetchData()
  // }, [])

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut deserunt quis perspiciatis libero nisi voluptas aperiam reiciendis dolorum! Voluptatum praesentium iusto optio sunt nostrum ut sit perspiciatis fugit quidem.</p>
      </div>
      <div className="bottom">
        {
        error ? "Something Went Wrong.." : (loading ? "loading" : data.map((item) => {
            return <Card key={item.id} {...item} />
          }))
        }
      </div>

    </div>
  )
}

export default FeaturedProducts