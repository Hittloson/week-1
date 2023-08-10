import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function Cards({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
}) {
    
  return (
    <div className='card-wrapper'>
      <div className='cards-container flex flex-col'>
        {imgSrc && imgAlt &&<img src={imgSrc} 
        alt={imgAlt} 
        className='card-img'
        />}
        {title &&<h1 className='card-title'>{title}</h1>}
        {description &&<p className='card-description'>{description}</p>}
        {buttonText && link &&<a href={link} className='card-btn'>{buttonText}</a>}
        
      </div>
    </div>
  )
}


export default Cards