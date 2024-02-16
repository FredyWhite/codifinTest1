import { createContext, useState } from "react";

export const contextProducts = createContext();

export const ProductsContext = ({ children }) => {
  const [currentIdProduct, setCurrentIdProduct] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Cat Coffee Mug",
      price: 20,
      description: "Ceramic mug with an adorable cat design, perfect for cat and coffee lovers. 350ml capacity.",
      image: "https://www.polkadotlane.co.uk/wp-content/uploads/2021/12/Cat-Pattern-Large-Tea-Mug-by-Ceramika-Arrtystyczna.jpg",
      creationDate: new Date().toISOString(),
      quantity:0,
    },
    {
      id: 2,
      name: "Wireless Bluetooth Headphones",
      price: 30,
      description: "Wireless headphones with Bluetooth 5.0 technology, high-quality stereo sound and built-in microphone for calls. Long-lasting battery with up to 6 hours of playback.",
      image: "https://cdn.mos.cms.futurecdn.net/fsDKHB3ZyNJK6zMpDDBenB.jpg",
      creationDate: new Date().toISOString(),
      quantity:0,
    },
    {
      id: 3,
      name: "Waterproof Hiking Backpack",
      price: 25,
      description: "40L capacity backpack, made with waterproof and breathable materials. Ideal for hiking, camping and outdoor trips.",
      image: "https://cfimg.wowcher.co.uk/cdn-cgi/image/height=520,width=777,quality=85,format=auto/https://static.wowcher.co.uk/images/deal/27792200/1077135.jpg",
      creationDate: new Date().toISOString(),
      quantity:0,
    },
    {
      id: 4,
      name: "Smartwatch with Fitness Tracker",
      price: 45,
      description: "Track your steps, heart rate, sleep and more with this stylish smartwatch. Features notifications, GPS and water resistance.",
      image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/fitnesstrackers-2048px-09819-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
      creationDate: new Date().toISOString(),
      quantity:0,
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      price: 22,
      description: "Wireless speaker with powerful sound and long battery life. Perfect for enjoying music on the go.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hKsNV_WadiBH-NNPLUEI43i4nhfNpWaLHVdfV86clHq3hTdqRrbgq8J78b8WReKb5DI&usqp=CAU",
      creationDate: new Date().toISOString(),
      quantity:0,
    },
    {
      id: 6,
      name: "Wireless Charging Pad",
      price: 18,
      description: "Charge your Qi-compatible smartphone wirelessly with this sleek and convenient charging pad.",
      image: "https://specials-images.forbesimg.com/imageserve/5d68618b673aa300083c8422/Mophie-3-in-1-Wireless-Charging-Pad/960x0.png?fit=scale",
      creationDate: new Date().toISOString(),
      quantity:0,
    },
  ])

  const handleGetProductId = (productId) => {
    return products.find((product) => product.id == productId && product);
  }
  

  return (
    <contextProducts.Provider value={{
      products,
      currentIdProduct, 
      setProducts,
      setCurrentIdProduct,
      handleGetProductId,
    }}>
      {children}
    </contextProducts.Provider>
  )
}