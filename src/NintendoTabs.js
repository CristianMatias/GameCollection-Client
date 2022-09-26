import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ConsoleTable from './ConsoleTable';

const NintendoTabs = () => {
    return (
        <Tabs
            defaultActiveKey="NES"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            fill
            >
            <Tab eventKey="NES" title="NES">
                <ConsoleTable platform={"NES"} />
            </Tab>
            <Tab eventKey="SNES" title="SNES">
                <ConsoleTable platform={"SNES"} />
            </Tab>
            <Tab eventKey="N64" title="N64">
                <ConsoleTable platform={"N64"} />
            </Tab>
            <Tab eventKey="GC" title="GC">
                <ConsoleTable platform={"GC"} />
            </Tab>
            <Tab eventKey="Wii" title="Wii">
                <ConsoleTable platform={"Wii"} />
            </Tab>
            <Tab eventKey="WiiU" title="WiiU">
                <ConsoleTable platform={"WiiU"} />
            </Tab>
            <Tab eventKey="Switch" title="Switch">
                <ConsoleTable platform={"Switch"} />
            </Tab>
            <Tab eventKey="GB" title="GameBoy">
                <ConsoleTable platform={"GB"} />
            </Tab>
            <Tab eventKey="GBC" title="GameBoy Color">
                <ConsoleTable platform={"GBC"} />
            </Tab>
            <Tab eventKey="GBA" title="GameBoy Advance">
                <ConsoleTable platform={"GBA"} />
            </Tab>
            <Tab eventKey="NDS" title="Nintendo DS">
                <ConsoleTable platform={"NDS"} />
            </Tab>
            <Tab eventKey="3DS" title="Nintendo 3DS">
                <ConsoleTable platform={"3DS"} />
            </Tab>
        </Tabs>
    )
}

export default NintendoTabs;