import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";


function App() {
  const [darkMode,setDarkMode]=useState(false);
  const paletteType =darkMode ? 'dark':'light';
  const theme=createTheme({
    palette:{
      mode:paletteType,
      background:{
        default:paletteType==='light'?'#eaeaea':'#121212'
      }
    }
  })
  
function handleThemeChange(){
  setDarkMode(!darkMode)
}


//empty array means the function called only once
  // function addProduct(){
  //   setProducts(prevState=>[
  //     ...prevState,
  //     {
  //      id:1,
  //      name:'product'+(prevState.length+1),
  //      price:(prevState.length*100)+100,
  //      description:"some",
  //      pictureUrl:"http://google.com",
  //      type:"type",
  //      brand:"brand",
  //      quantityInStock:12
       
  //     }])
  // }
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline/>
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container>
        < Catalog />
        </Container>
    </ThemeProvider>
  )
}

export default App
