import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ConsoleTable from '../ConsoleTable';

const PlayStationTabs = () => {
    return (
        <Tabs
            defaultActiveKey="PSX"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            fill
            >
            <Tab eventKey="PSX" title="PSX">
                <ConsoleTable platform={"PSX"} />
            </Tab>
            <Tab eventKey="PS2" title="PS2">
                <ConsoleTable platform={"PS2"} />
            </Tab>
            <Tab eventKey="PS3" title="PS3">
                <ConsoleTable platform={"PS3"} />
            </Tab>
            <Tab eventKey="PS4" title="PS4">
                <ConsoleTable platform={"PS4"} />
            </Tab>
            <Tab eventKey="PS5" title="PS5">
                <ConsoleTable platform={"PS5"} />
            </Tab>
            <Tab eventKey="PSP" title="PSP">
                <ConsoleTable platform={"PSP"} />
            </Tab>
            <Tab eventKey="PSVita" title="PSVita">
                <ConsoleTable platform={"PSVita"} />
            </Tab>
        </Tabs>
    )
}

export default PlayStationTabs;