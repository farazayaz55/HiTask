import Datatable2 from '../../components/datatable/Datatable2'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'

const List2 = () => {
  return (
    <div className='list'>
      <Sidebar>
      </Sidebar>
      <div className='listContainer'>
        
        <Datatable2></Datatable2>
        
      </div>
    </div>
  )
}

export default List2