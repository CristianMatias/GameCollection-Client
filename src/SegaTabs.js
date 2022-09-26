import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ConsoleTable from './ConsoleTable';

const SegaTabs = () => {
    return (
        <Tabs
            defaultActiveKey="SMS"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            fill
            >
            <Tab eventKey="SMS" title="Sega Master System">
                <ConsoleTable platform={"SMS"} />
            </Tab>
            <Tab eventKey="SGM" title="Sega Megadrive/Génesis">
                <ConsoleTable platform={"SGM"} />
            </Tab>
            <Tab eventKey="SS" title="Sega Saturn">
                <ConsoleTable platform={"SS"} />
            </Tab>
            <Tab eventKey="SD" title="Sega Dreamcast">
                <ConsoleTable platform={"SD"} />
            </Tab>
            <Tab eventKey="SGG" title="Sega Game Gear">
                <ConsoleTable platform={"SGG"} />
            </Tab>
        </Tabs>
    )
}

export default SegaTabs;