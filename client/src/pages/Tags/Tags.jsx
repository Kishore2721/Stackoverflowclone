import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import TagsList from './TagsList';
import './Tags.css';
import {tagsList} from './TagsList2';


const Tags = ({slidein}) => {
  return (
   <div className="homes-container-1">
    <LeftSidebar slidein={slidein}/>
    <div className="homes-container-2">
        <h1 className="tags-h1">
            Tags
        </h1>
        <p className="tags-p">A tag is akeyword or label that categorizes your question with other similar question.</p>
        <p className="tags-p">
            Using the right tags makes it easier for others to find and answer your question
        </p>
        <div className="tags-list-container">
            {tagsList.map((tag,index)=>(
                <TagsList tag={tag} key={index}/>
            ))}
        </div>
    </div>
   </div>
  )
}

export default Tags