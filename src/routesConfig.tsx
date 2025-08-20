import { Account } from "./Pages/Account"
import { Bag } from "./Pages/Bag"
import { Favourite } from "./Pages/Favourite"
import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { ProductPage } from "./Pages/ProductPage"
import { Profile } from "./Pages/Profile"
import { Shop } from "./Pages/Shop"
import { Signup } from "./Pages/Signup"


export const routesConfig = [
  { path: "/", element: <Home />, index: true },
  { path: "home", element: <Home /> },
  { path: "account", element: <Account /> },
  { path: "bag", element: <Bag /> },
  { path: "favourite", element: <Favourite /> },
  { path: "login", element: <Login /> },
  { path: "productPage", element: <ProductPage /> },
  { path: "profile", element: <Profile /> },
  { path: "shop", element: <Shop /> },
  { path: "signup", element: <Signup /> },
];