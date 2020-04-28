import React from 'react';
import Tag from '../../tag/Tag';
import './JobsCard.css';


const JobsCard = (props) => {
  const {
    url,
    area,
    place,
    company,
    releaseDate,
    description,
  } = props.job;

  return (
    <div className="job-card" >
      <div className="job-card-content">
        <p className="release-date">Postado em {releaseDate}</p>
        <h4>{description}</h4>
        <p>{company} - {place}</p>
        <Tag variant="green" value={area} />
      </div>
      <a
        href={url}
        target="_blank"
        className="show-more"
      >Saiba mais</a>
    </div>
  )
}

export default JobsCard;
