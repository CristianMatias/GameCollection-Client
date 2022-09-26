import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import App from './App'
import CustomTabs from './Tabs';
import Forms from './Form'

const MainPage = () => {
    return (
        <div>
        <h1>Game Collection</h1>
        <Tabs
            defaultActiveKey="Main"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            fill
            >
            <Tab eventKey="Main" title="All Games">
                <App />
            </Tab>
            <Tab eventKey="Second" title="Games by Console">
                <CustomTabs />
            </Tab>
            <Tab eventKey="Third" title="Add new game">
                <Forms />
            </Tab>
 
        </Tabs>
        </div>
    )
}

export default MainPage;