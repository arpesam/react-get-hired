import React from 'react';
import JobsCard from '../cards/job/JobsCard';
import ProfileCard from '../cards/profile/ProfileCard';
import Loading from '../loading/Loading';
import { profilesApi } from '../../api/profiles';
import { pages } from '../../constants/pages';


const CardsWrapper = ({ currentPage, data }) => {

  if (!currentPage || !data.length) return (
    <div>
      <Loading />
    </div>
  )

  const getCurrentPage = () => {
    if (currentPage === pages.profiles)
      return data.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ));

    if (currentPage === pages.jobs)
      return data.map((job, index) => (
        <JobsCard key={index} job={job} />
      ))
  }

  return (
    <div className="cards-wrap">
      {getCurrentPage()}
    </div>
  )
}

export default CardsWrapper;
