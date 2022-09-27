import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MainTable from './components/MainTable'
import CustomTabs from './components/tabs/Tabs';
import Forms from './components/Form'

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
                <MainTable />
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