import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ConsoleTable from '../ConsoleTable';

const MicrosoftTabs = () => {
    return (
        <Tabs
            defaultActiveKey="XBOX"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            fill
            >
            <Tab eventKey="XBOX" title="Xbox">
                <ConsoleTable platform={"XBOX"} />
            </Tab>
            <Tab eventKey="360" title="Xbox 360">
                <ConsoleTable platform={"360"} />
            </Tab>
            <Tab eventKey="XONE" title="Xbox One">
                <ConsoleTable platform={"XONE"} />
            </Tab>
            <Tab eventKey="XSX" title="Xbox Series X">
                <ConsoleTable platform={"XSX"} />
            </Tab>
            <Tab eventKey="PC" title="PC">
                <ConsoleTable platform={"PC"} />
            </Tab>
        </Tabs>
    )
}

export default MicrosoftTabs;