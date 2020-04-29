import React from 'react';
import JobsCard from '../cards/job/JobsCard';
import ProfileCard from '../cards/profile/ProfileCard';
import Loading from '../loading/Loading';
import { pages } from '../../constants/pages';
import './CardsWrapper.css';


const CardsWrapper = ({ currentPage, data }) => {

  if (!currentPage || !data.length) return (
    <div>
      <Loading />
    </div>
  )

  const getCurrentPage = () => {
    if (currentPage === pages.profiles)
      /*
        The current data that I'm using in firebase has no ID, thats
        why I'm using index as key 
     */
      return data.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
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
