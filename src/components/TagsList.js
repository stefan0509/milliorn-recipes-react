import { Link } from 'gatsby'
import React from 'react'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'

/* Setup component for tags */
const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="tags-container">
      <span className='tag-container-span'>Recipes</span>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [ text, value ] = tag
          const slug = slugify(text, { lower: true })

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
