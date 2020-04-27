import React from 'react'
import { profilesApi } from '../../api/profiles';
import Filters from '../../components/filters/Filters';
import { description, title } from './page-header-text';
import Pagination from '../../components/pagination/Pagination';
import ProfileCard from '../../components/cards/profile/ProfileCard';
import ContentHeader from '../../components/content-header/ContentHeader';
import './PageContent.css';


const PageContent = () => {
  const profilesMap = profilesApi.map((profile) => {
    return (
      <ProfileCard key={profile.id} profile={profile} />
    )
  })

  const profilesHeader = (
    <ContentHeader
      title={title.profileTitle}
      paragraph1={description.profile.paragraph1}
      paragraph2={description.profile.paragraph2}
    />
  );

  // const jobsHeader = (
  //   <ContentHeader
  //     title={title.jobs}
  //     paragraph1={description.jobs.paragraph1}
  //     paragraph2={description.jobs.paragraph2}
  //   />
  // );

  // const page = true;

  return (
    <div className="container page-content" >
      {profilesHeader}
      <Filters />
      <div className="cards-wrap" >
        {profilesMap}
      </div>
      <Pagination />
    </div>
  )
}

export default PageContent;
