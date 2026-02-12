import React, { useEffect, useState } from 'react'
// import { ToastContainer, toast } from "react-toastify"
import {Toaster,toast} from "react-hot-toast"
import { FaShoppingCart } from "react-icons/fa"
// import "react-toastify/dist/ReactToastify.css"
import "./App.css"

function Home() {
  var [data, setData] = useState([])
  var [cart, setCart] = useState([])
  var [showCart, setShowCart] = useState(false)

  async function fetchData() {
    var result = await fetch("https://fakestoreapi.com/products")
    var jsonResult = await result.json()
    setData(jsonResult)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function addToCart(product) {
    var itemExist = cart.find(item => item.id === product.id)

    if (itemExist) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
      toast.success("Quantity increased")
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
      toast.success("Added to cart")
    }
  }

  var totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div>
      <Toaster />

      {/* CART ICON */}
      <div className="cart-icon" onClick={() => setShowCart(true)}>
        <FaShoppingCart size={28} />
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </div>

      {/* PRODUCTS */}
      {data.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <button onClick={() => addToCart(item)}>Add To Cart</button>
          <hr />
        </div>
      ))}

      {/* CART POPUP */}
      {showCart && (
        <div className="cart-modal">
          <div className="cart-box">
            <h2>Your Cart</h2>

            {cart.length === 0 && <p>Cart is empty</p>}

            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <p>{item.title}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            ))}

            <button onClick={() => setShowCart(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
