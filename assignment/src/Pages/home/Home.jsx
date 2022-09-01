
import Sidebar from '../../components/sidebar/Sidebar'
import Table from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import './home.scss'
const Home = () => {
  return (

    <div className="home">
    <Sidebar></Sidebar>
    <div className='homeContainer'>
      <div className='listContainer'>
        <div className='listTitle'> DashBoard</div>
        <Table></Table>
      </div>
      </div>
    </div>
    
  )
}

export default Home