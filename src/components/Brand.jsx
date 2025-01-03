import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../axiosConfig'

function Brand() {
  const { brand } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (brand) {
      fetchBrandsProducts()
    }
  }, [brand])

  async function fetchBrandsProducts() {
    const response = await instance(`/api/product?brand=${brand}`)
    setProducts(response.data)
    console.log(response.data)
  }

  console.log(products)
  return (
    <div>
      {
        products.map((item) => {
          return (
            <div key={item.id} >

              <img src={item.url} alt="" />
              <h3>{item.name}</h3>

            </div>
          )
        })
      }
    </div>
  )
}

export default Brand
