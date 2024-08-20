import CopyRight from '@common/components/footer/CopyRight.jsx'

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container mx-auto text-center pt-64 px-10 pb-10 md:pt-16 lg:pt-16 sm:pt-44">
        <CopyRight copyright={'Copyright © 2024 HYEHYE blog.'} />
      </div>
    </footer>
  )
}

export default Footer
