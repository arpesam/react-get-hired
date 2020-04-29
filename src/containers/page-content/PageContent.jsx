import React, { useEffect, useState } from 'react'
import firebase from '../../firebase';
import { jobsApi } from '../../api/jobs';
import { pages } from '../../constants/pages';
import { profilesApi } from '../../api/profiles';
import Filters from '../../components/filters/Filters';
import Pagination from '../../components/pagination/Pagination';
import ProfileCard from '../../components/cards/profile/ProfileCard';
import ContentHeader from '../../components/content-header/ContentHeader';
import JobsCard from '../../components/cards/job/JobsCard';
import './PageContent.css';


const PageContent = ({ currentPage }) => {
  const [jobs, setJobs] = useState([]);

  const db = firebase.firestore();

  const collection = {
    profiles: db.collection("profiles"),
    jobs: db.collection("jobs"),
  }[currentPage];

  const profilesMap = profilesApi.map((profile) => (
    <ProfileCard key={profile.id} profile={profile} />
  ))

  const jobsMap = jobs.map((job, index) => (
    <JobsCard key={index} job={job} />
  ))


  const getCurrentPage = () => {
    if (currentPage === pages.profiles) return profilesMap;
    if (currentPage === pages.jobs) return jobsMap;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await collection.get()
      setJobs(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [])


  return (
    <div className="page-container page-content" >
      <ContentHeader currentPage={currentPage} />
      <Filters />
      <div className="cards-wrap" >
        {getCurrentPage()}
      </div>
      <Pagination totalCount={jobsApi.length} />
    </div>
  )
}

export default PageContent;
