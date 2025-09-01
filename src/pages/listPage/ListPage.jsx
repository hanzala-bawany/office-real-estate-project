import { data } from '../../utills/dummyData'
import s from './listPage.module.scss'
import ListItem from "../../components/listItem/ListItem"
import Filter from '../../components/filter/Filter'
import ReactLeafLetMap from '../../components/reactLeafLetMap/ReactLeafLetMap'
import { Button, Modal } from 'antd';
import { useCallback, useState } from 'react'


const ListPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, [])

  return (
    <div className={s.listPage}>

      <div className={s.listContainer}>
        <div className={s.wrapper}>

          <Filter />

          <div className={s.listItems}>

            {
              data.map((itemData) => <ListItem key={itemData.id} itemData={itemData} showModal={showModal} />)
            }

          </div>

        </div>
      </div>

      <div className={s.mapContainer}>

        <ReactLeafLetMap itemData={data} />

      </div>

      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        // destroyOnClose   
      >
        <div className={s.maodalWrapper}>
         { isModalOpen &&  <ReactLeafLetMap itemData={data} /> || "Leaf Let Map" }
        </div>
      </Modal>

    </div>
  )
}

export default ListPage