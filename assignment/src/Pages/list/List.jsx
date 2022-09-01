import DataTable1 from '../../components/datatable/Datatable1'
import Datatable from '../../components/datatable/Datatable'
import Sidebar from '../../components/sidebar/Sidebar'
import './list.scss'

const List = () => {
  return (
    <div className='list'>
      <Sidebar>
      </Sidebar>
      <div className='listContainer'>
        <Datatable></Datatable>
        
      </div>
    </div>
  )
}

export default List