import NavBar from "./components/NavBar";
import {  FloatButton } from 'antd';
import { WarningOutlined } from "@ant-design/icons";


function App() {
 
  return (
    <main className="App d-flex flex-column h-100 gap-[2rem]">
      <NavBar/>
      <img src="banner-index2.png" />
    <FloatButton   tooltip={{
        // tooltipProps is supported starting from version 5.25.0.
        title: 'Site em construção. Novidades em breve!',
        color: '#0D0065',
        placement: 'left',
        style: { color: '#000' },
        

      }} style={{  width: "70px" , height: "70px"}} icon={<WarningOutlined  />}  onClick={() => console.log('onClick')} />

      
    </main>
  );
}

export default App;
