import React, { useEffect, useState } from 'react'
import firebase from '../firebase';
import JobCard from '../components/cards/job/JobsCard';
import UpdateJob from './UpdateJob';


const Teste = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("jobs").get()
      setJobs(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [])

  return (
    <div>
      {
        jobs.map((job, index) => (
          <div key={index}>
            <JobCard key={index} job={job} />
            <UpdateJob job={job} />
          </div>
        ))
      }
    </div>
  )
}

export default Teste
