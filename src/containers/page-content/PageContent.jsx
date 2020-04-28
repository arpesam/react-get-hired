import React from 'react'
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

  const profilesMap = profilesApi.map((profile) => (
    <ProfileCard key={profile.id} profile={profile} />
  ))

  const jobsMap = jobsApi.map((job) => (
    <JobsCard key={job.id} job={job} />
  ))

  const getCurrentPage = () => {
    if (currentPage === pages.profiles) return profilesMap;
    if (currentPage === pages.jobs) return jobsMap;
  }

  return (
    <div className="page-container page-content" >
      <ContentHeader currentPage={currentPage} />
      <Filters />
      <div className="cards-wrap" >
        {getCurrentPage()}
      </div>
      <Pagination />
    </div>
  )
}

export default PageContent;
