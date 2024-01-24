import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/
const SiteSeo = ({ title, description, children }) => {
  const { title: defaultTitle, description: defaultDescription } =
    useSiteMetadata()

  const seo = {
    title: `${title} | Simply Recipes` || defaultTitle,
    description: description || defaultDescription
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  )
}

export default SiteSeo
