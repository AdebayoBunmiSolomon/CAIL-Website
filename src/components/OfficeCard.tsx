import React from 'react'
import { IContact } from '@/assets/data/getContactData'




const OfficeCard = ({title, address, city, state, phone}: IContact) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p>{address}</p>
      <p>{city} </p>
      <p>{state}</p>
      <p>{phone}</p>
    </div>
  )
}

export default OfficeCard


const styles = {
  container: 'flex flex-col w-full  gap-2 bg-[#F5F5F5] px-5 py-5 m-5 rounded-2xl',
  title: 'text-[#900000] font-bold text-2xl',
}
