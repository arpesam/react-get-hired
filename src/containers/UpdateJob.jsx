import React, { useState } from 'react'
import firebase from '../firebase';


const UpdateJob = ({ job }) => {
  const [company, setCompany] = useState(job.company)

  console.log('job ---', job)
  const onUpdate = async () => {
    console.log('ajsjsjsjs')
    const db = firebase.firestore();
    const aa = await db.collection("job").doc("0").set({ ...job, company }).then(
      res => {
        console.log('resrrers ', res)
      }
    )
    console.log('aaaaaa', aa)
  }

  const onChange = (e) => {
    console.log('event', e)
    setCompany(e.target.value)
  }

  return (
    <div>
      <input value={company} onChange={(e) => {
        e.persist()
            console.log('event', e.target.value)
            setCompany(e.target.value)
      }} />
      <button onClick={onUpdate}>Update</button>
    </div>
  )
}

export default UpdateJob;
