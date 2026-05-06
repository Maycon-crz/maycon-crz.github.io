import ProjectsContainer from './ProjectsContainer'
import SkillsTabs from './SkillsTabs'
import CertificatesContainer from './CertificatesContainer'
import '../styles/components/maincontent.sass'
import FooterContainer from './FooterContainer'
import CompanyProjects from './CompanyProjects'

const MainContent = () => {
  return (
    <main id="main-content">
      <SkillsTabs />
      <hr />
      <ProjectsContainer />
      <hr />
      <CertificatesContainer />
      <hr />
      <CompanyProjects />
      <FooterContainer />
    </main>
  )
}

export default MainContent