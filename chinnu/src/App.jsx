// // // import React from "react";
// // // function App()
// // // {
// // //   function HandleAlert()
// // //   {
// // //     alert("hai")
// // //     console.log("hai");
// // //   }
// // //   return(
// // //     <div>
// // //       <button onClick={HandleAlert}>click</button>
// // //     </div>
// // //   )
// // // }
// // // export default App

// // // import { BrowserRouter, Route } from "react-router-dom"



// // // import { useState } from "react";
// // // import Login from "./Login";
// // // import Navbar from "./Navbar";
// // // import Sidebar from "./Sidebar";
// // // import Signup from "./Signup";


// // // import React, { useState } from "react";

// // // function App()
// // // {
// // //   var[count,setcount]=useState(0)
// // //   return(
// // //     <div>
// // //       <h1>{count}</h1>
// // //       <button onClick={()=>{setcount(count+1)}}>increment</button>
// // //       <button onClick={()=>{setcount(count-1)}}>decrement</button>
// // //       <button onClick={()=>{setcount(count=0)}}>reset</button>
// // //     </div>
// // //   )
// // // }
// // // export default App

// // // import React, { useState } from "react";
// // // function App()
// // // {
// // //   var[count,setCount]=useState("0")
// // //   console.log("count",count);
// // //   function Increment()
// // //   {
// // //     setCount(count+1)
// // //   }
// // //   function Decrement()
// // //   {
// // //     setCount(count-1)
// // //   }
// // //   function Reset()
// // //   {
// // //     setCount(count=0)
// // //   }
// // //   return(
// // //     <div>
// // //       <h1>{count}</h1>
// // //       <button onClick={Increment}>Increment</button>
// // //       <button onClick={Decrement}>Decrement</button>
// // //       <button onClick={Reset}>Reset</button>
// // //     </div>
// // //   )
// // // }
// // // export default App



// // // import React, { useState } from "react";
// // // function App()
// // // {
// // //   var[data,setdata]=useState("hai")
// // //   function Handlechange()
// // //   {
// // //     setdata("bye")
// // //   }
// // //   return(
// // //     <div>
// // //       <h1>{data}</h1>
// // //       <button onClick={Handlechange}>change</button>
// // //     </div>
// // //   )
// // // }
// // // export default App


// // // function Shiva()
// // // {
// // //   var accountExist=true
// // //   var component;
// // //   if(accountExist)
// // //   {
// // //     component=<Login/>
// // //   }
// // //   else {
// // //     component=<Signup/>
// // //   }
// // //   return(
// // //     <div>
// // //       {component}
// // //     </div>
// // //   )
// // // }
// // // export default Shiva


// // // import React from "react";
// // // import './App.css'
// // // import Header from "./Header";
// // // import Body from "./Body";
// // // import Footer from "./Footer";
// // // function App()
// // // {
// // //   return(
// // //     <div id='Layout'>
// // //       <Sidebar/>
// // //       <div id='Right'>
// // //       <Navbar/>
// // //       <Header/>
// // //       <Body/>
// // //       <Footer/>
// // //       </div>
// // //     </div>
// // //   )
// // // }
// // // export default App


// // //270126


// // // function App()
// // // {
// // //   var[name,setName]=useState("")
// // //   var[number,setNumber]=useState("")
// // //   var[password,setPassword]=useState("")
// // //   var[email,setEmail]=useState("")
// // //   console.log(name,number,password,email);
// // //   return(
// // //     <div>
// // //       <label htmlFor="">enter name</label>
// // //       <input  value={name}onChange={(e)=>{setName(e.target.value)}}type="text" />
// // //       <label htmlFor="">enter number</label>
// // //       <input  value={number}onChange={(e)=>{setNumber(e.target.value)}}type="text" />
// // //       <label htmlFor="">enter password</label>
// // //       <input  value={password}onChange={(e)=>{setPassword(e.target.value)}}type="text" />
// // //       <label htmlFor="">enter email</label>
// // //       <input  value={email}onChange={(e)=>{setEmail(e.target.value)}}type="text" />

// // //     </div>
// // //   )
// // // }
// // // export default App



// // // function App()
// // // {
// // //   var[name,setName]=useState("")
// // //   var[email,setEmail]=useState("")
// // //   var[number,setNumber]=useState("")
// // //   var[password,setPassword]=useState("")
// // //   function handleForm(e)
// // //   {
// // //     e.preventDefault()
// // //     if(name=="" || email=="" || number=="" || password=="")
// // //     {
// // //       alert("fill the fields")
// // //     }
// // //     else{
// // //       if(name=="bjg" && email=="bjg@" && number=="123" && password=="12345")
// // //       {
// // //         alert("form submitted")
// // //         setName("")
// // //         setEmail("")
// // //         setNumber("")
// // //         setPassword("")
// // //       }
// // //       else{
// // //         alert("invalid details")
// // //       }
// // //     }
// // //   }
// // //   console.log(name,email,number,password);
// // //   return(
// // //     <div>
// // //       <form  onSubmit={handleForm}action="">
// // //         <label htmlFor="">enter name</label>
// // //         <input  value={name}onChange={(e)=>{setName(e.target.value)}}type="text" />
// // //         <label htmlFor="">enter email</label>
// // //         <input  value={email}onChange={(e)=>{setEmail(e.target.value)}}type="text" />
// // //         <label htmlFor="">enter number</label>
// // //         <input  value={number}onChange={(e)=>{setNumber(e.target.value)}}type="text" />
// // //         <label htmlFor="">enter password</label>
// // //         <input  value={password}onChange={(e)=>{setPassword(e.target.value)}}type="text" />
// // //         <button type="submit">submit</button>
    
      
// // //       </form>

// // //     </div>
// // //   )
// // // }
// // // export default App

// // // import React, { useState } from "react";
// // // import {ToastContainer,toast}from "react-toastify"
// // // import './App.css'
// // // function App()
// // // {
// // //     var[name,setName]=useState("")
// // //     var[email,setEmail]=useState("")
// // //     var[number,setNumber]=useState("")
// // //     var[password,setPassword]=useState("")
// // //     function handleForm(e)
// // //     {
// // //         e.preventDefault()
// // //         if(name=="" || email=="" || number=="" || password=="")
// // //         {
// // //             toast.error("fill all fields")
// // //         }
// // //         else{
// // //             if(name=="bjg" && email=="bjg@" && number=="123" && password=="1234")
// // //             {
// // //                 toast.success("form submitted")
// // //                 setName("")
// // //                 setEmail("")
// // //                 setNumber("")
// // //                 setPassword("")
// // //             }
// // //             else{
// // //                 toast.warn("invalid details")
// // //                 setName("")
// // //                 setEmail("")
// // //                 setNumber("")
// // //                 setPassword("")
// // //             }
// // //         }
// // //     }
// // //     console.log(name,email,number,password);
// // //     return(
// // //         <div>
// // //             <ToastContainer/>
// // //             <form  onSubmit={handleForm}action="">
// // //                 <label htmlFor="">enter name</label>
// // //                 <input  value={name}onChange={(e)=>{setName(e.target.value)}}type="text" />
// // //                 <label htmlFor="">enter email</label>
// // //                 <input  value={email}onChange={(e)=>{setEmail(e.target.value)}}type="text" />
// // //                 <label htmlFor="">enter number</label>
// // //                 <input  value={number}onChange={(e)=>{setNumber(e.target.value)}}type="text" />
// // //                 <label htmlFor="">enter password</label>
// // //                 <input  value={password}onChange={(e)=>{setPassword(e.target.value)}}type="text" />
// // //               <button type="submit">submit</button>
// // //             </form>

// // //         </div>
// // //     )
// // // }
// // // export default App


// // // import React from "react";
// // // import {BrowserRouter,Routes,Route} from "react-router-dom"
// // // import Signup from "./Signup.jsx";
// // // import Login from "./Login.jsx";
// // // import "./App.css"
// // // function App()
// // // {
// // //   return(
// // //     <div>
// // //       <BrowserRouter>
// // //       <Routes>
// // //         <Route path="/" element={<Signup/>}/>
// // //         <Route path="/Login" element={<Login/>}/>       

// // //       </Routes>
// // //       </BrowserRouter>

// // //     </div>
// // //   )
// // // }
// // // export default App



// // // import react from "react";
// // // import {BrowserRouter,Routes,Route} from "react-router-dom"
// // // import JavaScript from "./Javascript";
// // // import Python from "./Python";
// // // import Home from "./Home";
// // // import Angular from "./Angular";
// // // import Express from "./Express";
// // // import Nodejs from "./Nodejs";





// // // function App(){
// // //     return(
// // //         <div>
// // //             <BrowserRouter>
// // //             <Routes>
// // //                 <Route path='/' element={<Home/>}/>
// // //                 <Route path='/python' element={<Python/>}/>
// // //                 <Route path='/js' element={<JavaScript/>}/>
// // //                 <Route path='/an' element={<Angular/>}/>
// // //                 <Route path='/ex' element={<Express/>}/>
// // //                 <Route path='/nod' element={<Nodejs/>}/>
              

// // //             </Routes>
// // //             </BrowserRouter>

// // //         </div>
// // //     )
// // // }

// // // export default App




// // import React from 'react'
// // import Home from './Home'

// // function Bjg (){
// //     var myName = "Hai This is Bhaskar"
// //   return (
// //     <div>
// //         <Home name = {myName}/>

// //     </div>
// //   )
// // }

// // export default Bjg





// // // import React, { Suspense, lazy } from 'react'
// // // import { AiOutlineLoading3Quarters } from "react-icons/ai";

// // // const Home = lazy(() => import("./Home"))

// // // const App = () => {

// //   // 🔹 App container style
// // //   const appStyle = {
// // //     minHeight: "100vh",
// // //     background: "linear-gradient(135deg, #667eea, #764ba2)",
// // //     display: "flex",
// // //     justifyContent: "center",
// // //     alignItems: "center"
// // //   }

// //   // 🔹 Loader style
// // //   const loaderStyle = {
// // //     minHeight: "100vh",
// // //     background: "linear-gradient(135deg, #667eea, #764ba2)",
// // //     display: "flex",
// // //     justifyContent: "center",
// // //     alignItems: "center"
    

// // //   }

// // //   return (
// // //     <div style={appStyle}>
// // //       <Suspense fallback={<div style={loaderStyle}><AiOutlineLoading3Quarters /></div>}>
// // //         <Home />
// // //       </Suspense>
// // //     </div>
// // //   )
// // // }

// // // export default App





// // // import React, { useState } from 'react'

// // // function App()
// // // {


// // //     var [email,setEmail] = useState("")
// // //     var [password,setPassword] = useState("")
// // //     var [error,setError] = useState("")

// // //     function handleForm(e){
// // //         e.preventDefault()
// // //         if(email == "bjg@" && password == "1234"){
// // //             alert("login suces")
// // //             setEmail("")
// // //             setPassword("")
// // //             setError(null)
// // //         }else{
// // //             setError("email or password is incorrect")
            
// // //         }

// // //     }

// // //   return (
// // //     <div>
// // //         <form onSubmit={handleForm} action="">
// // //         <label htmlFor="">Enter Email : </label>
// // //         <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" /><br></br><br></br>
// // //         <label htmlFor="">Enter Password : </label>
// // //         <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" /><br></br><br></br>
// // //         <button>Login</button>
// // //         <h1>{error}</h1>




// // //         </form>
// // //     </div>
// // //   )
// // // }

// // // export default App









// // // import React, { useState } from "react";
// // // function App()
// // // {
// // //   var[count,setCount]=useState(0)
// // //   console.log("count",count);
// // //   function Inc()
// // //   {
// // //     setCount(count+1)
// // //   }
// // //   function Dec()
// // //   {
// // //     setCount(count-1)
// // //   }
// // //   function Re()
// // //   {
// // //     setCount(count=0)
// // //   }
// // //   return(
// // //     <div>
// // //       <h1>{count}</h1>
// // //       <button onClick={Inc}>Increment</button>
// // //       <button onClick={Dec}>Decrement</button>
// // //       <button onClick={Re}>Reset</button>
     
// // //     </div>
// // //   )
// // // }
// // // export default App









// // //  practise







// // // import React, { useState } from "react";
// // // function App()
// // // {
// // //   var[count,setCount]=useState(0)
// // //   console.log("count",count);
// // //   function Inc()
// // //   {
// // //     setCount(count+1)
// // //   }
// // //   function Dec()
// // //   {
// // //     setCount(count-1)
// // //   }
// // //   function Re()
// // //   {
// // //     setCount(count=0)
// // //   }
// // //   return(
// // //     <div>
// // //       <h1>{count}</h1>
// // //       <button onClick={Inc}>Increment</button>
// // //       <button onClick={Dec}>Decrement</button>
// // //       <button onClick={Re}>Reset</button>
     
// // //     </div>
// // //   )
// // // }
// // // export default App



// // import React, { useState } from "react"
// // import {Toaster,toast} from "react-hot-toast"
// // function App()
// // {
// //   var[name,setName]=useState("")
// //   var[password,setPassword]=useState("")
// //   function handleForm(e)
// //   {
// //     e.preventDefault()
// //     if(name=="bjg" && password=="1234")
// //     {
// //       toast.success("login success")
// //     }
// //     else{
// //       if(name=="" || password=="")
// //       {
// //         toast.error("fill the details")
// //       }
// //       else{
// //         toast("invalid details")
// //       }
// //     }
// //   }
// //   return(
// //     <div>
// //       <Toaster/>
// //       <form  onSubmit={handleForm} action="">
// //       <label htmlFor="">enter name</label>
// //       <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" />
// //       <label htmlFor="">enter password</label>
// //       <input  value={password} onChange={(e)=>{setPassword(e.target.value)}}type="text" />
// //       <button>login</button>
// //       </form>

// //     </div>
// //   )
// // }
// // export default App


// // import React from "react";
// // import Home from "./Home";
// // function App()
// // {
// //   var myName="hai"
// //   return(
// //     <div>
// //       <Home name={myName}/>
// //     </div>
// //   )
// // }
// // export default App






// // // import React from "react";
// // // import {BrowserRouter,Routes,Route} from "react-router-dom"
// // // import JavaScript from "./Javascript";
// // // import Home from "./Home";
// // // function App()
// // // {
// // //   return(
// // //     <div>
// // //       <BrowserRouter>
// // //       <Routes>
// // //         <Route path="/js" element={<JavaScript/>}/>
// // //         <Route path="/" element={<Home/>}/>

// // //       </Routes>
// // //       </BrowserRouter>

// // //     </div>
// // //   )
// // // }
// // // export default App












// // import React from 'react'

// // import {BrowserRouter,Routes,Route} from "react-router-dom"

// // import Login from './Login'
// // import Signup from './Signup'
// // import Home from './Home'

// // function App() {
// //   return (
// //     <div>
// //         <BrowserRouter>
// //         <Routes>
// //             <Route path='/' element={<Login/>}/>
// //             <Route path='/signup' element={<Signup/>}/>
// //             <Route path='/home' element = {<Home/>}/>

// //         </Routes>
// //         </BrowserRouter>

// //     </div>
// //   )
// // }

// // export default App





// // import React from "react"
// // import {BrowserRouter,Routes,Route} from 'react-router-dom'
// // import Signup from "./Signup"
// // import Login from "./Login"
// // import Home from "./Home"

// // function App()
// // {
// //   return(
// //     <div>
// //       <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Signup/>}/>
// //         <Route path="/Login" element={<Login/>}/>
// //         <Route path="/Home" element={<Home/>}/>
// //       </Routes>
// //       </BrowserRouter>

// //     </div>
// //   )
// // }
// // export default App






// //7022026


// // usememo




// // import React, { useMemo, useState } from 'react'

// // function App (){
// //     var [number,setNumber] = useState(0)
// //     var [count,setCount] = useState(0)
// //     function cubeNum(num){
// //         console.log("calculation done");
// //         return Math.pow(num,3)
// //     }
// //     var result = useMemo(()=>{return cubeNum(number)},[number])
// //   return (
// //     <div>
// //         <h1>Cube of the number</h1>
// //         <input value={number} onChange={(e)=>{setNumber(e.target.value)}} type="text" />
// //         <h1>{result}</h1>
// //         <h1>{count}</h1>
// //         <button onClick={()=>{setCount(count+1)}}>+1</button>
// //     </div>
// //   )
// // }

// // export default App



// /// usecallback ---> returns the memoized function 



// // import React, { useCallback, useState } from 'react'
// // import Header from './Header'

// // function App(){
// //     var [count,setCount] = useState(0)
    
// //   return (
// //     <div>
// //         <Header/>
// //         <h1>{count}</h1>
// //         <button onClick={()=>{setCount(count+1)}}>+1</button>
// //     </div>
// //   )
// // }

// // export default App




// // import React, { useCallback, useState } from 'react'
// // import Header from './Header'

// // function App(){
// //     var [count,setCount] = useState(0)
// //     var newFn = useCallback(()=>{},[])
// //   return (
// //     <div>
// //         <Header newFn = {newFn}/>
// //         <h1>{count}</h1>
// //         <button onClick={()=>{setCount(count+1)}}>+1</button>
// //     </div>
// //   )
// // }

// // export default App







// // import React, { useEffect, useState } from 'react'


// // function App(){
// //     var [data,setData] = useState([])
// //     var [input,setInput] = useState("")

// //     async function fetchData(){
// //         var result = await fetch("https://fakestoreapi.com/products")
// //         var jsonResult = await result.json()
// //         setData(jsonResult)
// //     }
// //     useEffect(()=>{
// //         fetchData()
// //     },[])
// //     var filteredData = data.filter(item=>item.title.toLowerCase().includes(input.toLowerCase()))
    
// //   return (
// //     <div >
     
// //         <center><input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder='search' style={{ width: "100px",
// //     height: "15px",
// //     padding: "4px 8px"}}/></center>
    
// //         {
// //             filteredData.map((item)=>{
// //                 return(
// //                     <div>
// //                         <h1>{item.title}</h1>
// //                     </div>
// //                 )
// //             })
// //         }
// //     </div>
// //   )
// // }

// // export default App








// // import React, { useEffect, useState } from 'react'
// // import { ToastContainer, toast } from "react-toastify"

// // function App() {
// //   var [data, setData] = useState([])
// //   var [input, setInput] = useState("")

// //   async function fetchData() {
// //     var result = await fetch("https://fakestoreapi.com/products")
// //     var jsonResult = await result.json()
// //     setData(jsonResult)
// //   }

// //   useEffect(() => {
// //     fetchData()
// //   }, [])

// //   var filteredData = data.filter(item =>
// //     item.title.toLowerCase().includes(input.toLowerCase())
// //   )

// //   function handleSearch(e) {
// //     e.preventDefault()

// //     if (filteredData.length > 0) {
// //       toast.success("Product found ")
// //     } else {
// //       toast.error("Couldn't find ")
// //     }
// //   }

// //   return (
// //     <div>
// //       <ToastContainer />

// //       <form onSubmit={handleSearch}>
// //         <center>
// //           <input
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //             type="text"
// //             placeholder="search"
// //             style={{
// //               width: "100px",
// //               height: "15px",
// //               padding: "4px 8px"
// //             }}
// //           />
// //         </center>
// //       </form>

// //       {filteredData.map((item) => (
// //         <div>
// //           <h1>{item.title}</h1>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default App







// // import React, { useEffect, useState } from 'react'

// // const App = () => {
// //     var [data,setData] = useState([])
// //     var [cart,setCart] = useState([])
// //     var [qauntity,setQuanity] = useState(0)

// //     async function fetchData(){
// //         var result = await fetch("https://fakestoreapi.com/products")
// //         var jsonResult = await result.json()
// //         setData(jsonResult)
// //     }
// //     useEffect(()=>{
// //         fetchData()
// //     },[])

// //     function addToCart(product){
// //         var itemExist = cart.find(item=>item.id == product.id)
// //         if(itemExist){
// //             setQuanity(qauntity+1)

// //         }else{
// //             setCart([...cart,product])
// //         }
// //     }
// //     console.log(cart);

// //   return (
// //     <div>
// //         {
// //             data.map((item)=>{
// //                 return(
// //                     <div>
// //                         <h1>{item.title}</h1>
// //                         <button onClick={()=>addToCart(item)}>Add To Cart</button>

// //                     </div>
// //                 )
// //             })
// //         }
// //         <div>
// //             {
// //                 cart.map((item)=>{
// //                     return(
// //                         <div>
// //                             <h1>{item.title}</h1>
// //                             <h1>{qauntity}</h1>
// //                         </div>
// //                     )
// //                 })
// //             }
// //         </div>
// //     </div>
// //   )
// // }

// // export default App




// import React, { useEffect, useState } from 'react'
// import {ToastContainer,toast} from "react-toastify"




// function App(){
//   var [data, setData] = useState([])
//   var [cart, setCart] = useState([])
 
 
  

//   async function fetchData() {
//     var result = await fetch("https://fakestoreapi.com/products")
//     var jsonResult = await result.json()
//     setData(jsonResult)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   function addToCart(product) {
//     var itemExist = cart.find(item => item.id === product.id)

//     if (itemExist) {
//       var updatedCart = cart.map(item =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//       setCart(updatedCart)
//       toast.success("quantity increased")
    
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }])
//       toast.success("updated cart")
       
//     }
//   }
 
 

//   return (
//     <div>
//       <ToastContainer/>
//       {data.map(item => (
//         <div key={item.id}>
//           <h1>{item.title}</h1>
//           <button onClick={() => addToCart(item)}>Add To Cart</button>
//         </div>
//       ))}

//       <hr />

//       <h2>Cart</h2>
//       {cart.map(item => 
//         <div key={item.id}>
          
//           <h1>{item.title}</h1>
//           <h2>Quantity: {item.quantity}</h2>
//         </div>
//      )}
//     </div>
//   )
// }

// export default App







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
