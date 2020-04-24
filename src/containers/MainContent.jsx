import React from 'react'
import ProfileCard from '../components/cards/profile/ProfileCard';
import { profilesApi } from '../api/profiles';
import ContentHeader from '../components/content-header/ContentHeader';
import Filters from '../components/filters/Filters';
import Pagination from '../components/pagination/Pagination';
import { description, title } from './page-header-text';
import './MainContent.css';


const MainContent = () => {
  const profilesMap = profilesApi.map((profile) => {
    return (
      <ProfileCard key={profile.id} profile={profile} />
    )
  })

  const profiles = (
    <ContentHeader
      title={title.profileTitle}
      paragraph1={description.profile.paragraph1}
      paragraph2={description.profile.paragraph2}
    />
  );

  const jobs = (
    <ContentHeader
      title={title.jobs}
      paragraph1={description.jobs.paragraph1}
      paragraph2={description.jobs.paragraph2}
    />
  );

  const page = true;

  return (
    <div className="container main-content-container">
      {profiles}
      <Filters />
      <div className="main-content" >
        {profilesMap}
      </div>
      <div className="pagination-container">
        <Pagination />
      </div>
    </div>
  )
}

export default MainContent;
