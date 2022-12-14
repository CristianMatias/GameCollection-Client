import { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { getGamesByPlatform } from "../services/Services";

const ConsoleTable = (props) => {
    const [games, setGames] = useState([]);
    const [totalGames, setTotal] = useState();
  
    const fetchData = async () => {
      const { data } = await getGamesByPlatform(props.platform);
      setGames(data.listGames);
      setTotal(data.totalGames);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const columns = [{
      dataField: 'name',
      text: 'Name',
      sort: true
    }, {
      dataField: 'developer',
      text: 'Developer'
    }, {
      dataField: 'region',
      text: 'Region'
    }];
  
    const defaultSortedBy = [{
      dataField: "name",
      order: "asc"  
    }];
  

    return (
     <div>
       <div>
        <h5>Juegos de {props.platform}: {totalGames}</h5>
        <BootstrapTable 
          pagination={paginationFactory()} 
          keyField='name' 
          data={ games } 
          columns={ columns } 
          defaultSorted={defaultSortedBy}
        />
       </div>
  
     </div>
    );
  }
  
  export default ConsoleTable;