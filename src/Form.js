import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios";
import { useState } from 'react';

function CustomForm() {
    const [name, setName] = useState("");
    const [platform, setPlatform] = useState("");
    const [region, setRegion] = useState("");
    const [developer, setDeveloper] = useState("");

    function onSubmit() {
        console.log(platform)
        Axios.post("http://localhost:8080/game/Cristian", {
            name: name,
            platform: platform,
            region: region,
            developer: developer
        })
    };

  return (
      <div>
        <div>
            <h4>Nuevo Juego</h4>
        </div>
            
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre del Juego</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="ej: Grand Theft Auto V" 
                    onChange={e => setName(e.target.value)}
                />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Consola</Form.Label>
                <Form.Select value={platform} onChange={e => setPlatform(e.target.value)} size="sm">
                    <option>Selecciona Consola</option>
                    <option value={"NES"}>Nintendo Entertaiment System</option>
                    <option value={"SNES"}>Super Nintendo Entertaiment System</option>
                    <option value={"N64"}>Nintendo 64</option>
                    <option value={"GC"}>GameCube</option>
                    <option value={"Wii"}>Nintendo Wii</option>
                    <option value={"WiiU"}>Nintendo Wii U</option>
                    <option value={"Switch"}>Nintendo Switch</option>
                    <option value={"GB"}>GameBoy</option>
                    <option value={"GBC"}>GameBoy Color</option>
                    <option value={"GBA"}>GameBoy Advance</option>
                    <option value={"NDS"}>Nintendo DS</option>
                    <option value={"3DS"}>Nintendo 3DS</option>
                    <option value={"PSX"}>PlayStation 1</option>
                    <option value={"PS2"}>PlayStation 2</option>
                    <option value={"PS3"}>PlayStation 3</option>
                    <option value={"PS4"}>PlayStation 4</option>
                    <option value={"PS5"}>PlayStation 5</option>
                    <option value={"PSP"}>PlayStation Portable</option>
                    <option value={"PSVita"}>PlayStation Vita</option>
                    <option value={"XBOX"}>Xbox (Classic)</option>
                    <option value={"360"}>Xbox 360</option>
                    <option value={"XONE"}>Xbox One</option>
                    <option value={"XSX"}>Xbox Series X/S</option>
                    <option value={"PC"}>PC</option>
                    <option value={"SMS"}>Sega Master System</option>
                    <option value={"SGM"}>Sega Génesis/Megadrive</option>
                    <option value={"SS"}>Sega Saturn</option>
                    <option value={"SD"}>Sega DreamCast</option>
                    <option value={"SGG"}>Sega GameGear</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Desarrolladora</Form.Label>
                <Form.Control 
                    onChange={e => setDeveloper(e.target.value)} 
                    type="text" 
                    placeholder="ej: Rockstar" 
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Región</Form.Label>
                <Form.Select value={region} onChange={e => setRegion(e.target.value)} size="sm">
                    <option>Selecciona región</option>
                    <option value={"PAL"}>PAL</option>
                    <option value={"NTSC-J"}>NTSC-J</option>
                    <option value={"NTSC-U"}>NTSC-U</option>
                </Form.Select>
            </Form.Group>
            <Button onClick={() => onSubmit()} variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
      
      </div>
    
  );
}

export default CustomForm;