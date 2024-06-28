import React from 'react'

const WidgetTags = () => {
 
    const tags=['c','express','react','javascript','css','java','hmtl','mongodb','mysql','tailwindcss','nextjs'];

  return (
    <div className='widget-tags'>
         <h4>Watched Tags</h4>
         <div className='widget-tags-div'>
            {
                tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))
            }
         </div>
    </div>
  )
}

export default WidgetTags