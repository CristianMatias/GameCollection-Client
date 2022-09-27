import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PlayStationTabs from './PlayStationTabs';
import NintendoTabs from './NintendoTabs';
import XboxTabs from './MicrosoftTabs'
import SegaTabs from './SegaTabs';

const CustomTabs = () => {
    return (
        <Tabs
            defaultActiveKey="PS"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            fill
            >
            <Tab eventKey="PS" title="PlayStation">
                <PlayStationTabs />
            </Tab>
            <Tab eventKey="Nintendo" title="Nintendo">
                <NintendoTabs />
            </Tab>
            <Tab eventKey="Xbox" title="Microsoft">
                <XboxTabs />
            </Tab>
            <Tab eventKey="Sega" title="Sega">
                <SegaTabs />
            </Tab>
        </Tabs>
    )
}

export default CustomTabs;