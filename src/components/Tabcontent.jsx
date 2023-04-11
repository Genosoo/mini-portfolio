import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Projects from './Projects';
import Skills from './Skills';

function Tabcontent() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Projects">
        <div className="project-container">
          <Projects />        
        </div>
      </Tab>
      <Tab eventKey="profile" title="Skills">
        <Skills />
      </Tab>

      <Tab eventKey="about" title="About">
       about
      </Tab>
     
    </Tabs>
  );
}

export default Tabcontent;