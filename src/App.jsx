
import Banner from "./components/Banner";
import Header from "./components/Header"; 
import Component1, { Component2 } from "./components/VariosComponentes";

const App = () => {
  return ( 
    //parte visivel do componente//
    <>
    <Header />
    <Banner />
    <Component1 />
    <Component2 />
    </>
   );
}
 
export default App;