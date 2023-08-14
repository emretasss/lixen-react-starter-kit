import {Button,Tab,Tabs}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttonprops from './components/button';

function Abc()
{
    return (
        <div>
            <h3>Bootstrap components</h3>
            <Button>button</Button>
      <Button variant="secondary">    Secondary    </Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Tabs 
      defaultActiveKey="home"
     
    >
      <Tab   eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        <div>hiiijjj</div>
        <Buttonprops hijj="hijjj" />
      </Tab>
    </Tabs>
      
        </div>

    )
}

export default Abc