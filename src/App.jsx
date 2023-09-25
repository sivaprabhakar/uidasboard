import Dashboard from "./component/Dashboard"
import Sidebar from "./component/sidebar"
import Search from "./component/search"
import Tile from "./component/Tile"
import Table from "./component/Table"
function App() {
 

  return (
    <>
       <div id='wrapper'>
       <Search/>
       <Tile/>
      <Table/>
       <Sidebar/>
       
       <Dashboard/>
      
       
    </div>
    </>
  )
}

export default App
