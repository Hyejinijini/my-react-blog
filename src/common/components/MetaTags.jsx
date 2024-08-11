import { HelmetProvider, Helmet } from 'react-helmet-async'

const MetaTags = ({ title = 'HYEHYE', subTitle, description, keywords }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {title}
          {subTitle}
        </title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="방혜진" />
      </Helmet>
    </HelmetProvider>
  )
}

export default MetaTags
