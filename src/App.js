import Axios from "axios";
import { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const MainTable = () => {
  const requestEndpoint = "http://localhost:8080/game/Cristian";
  const [games, setGames] = useState([]);
  const [totalGames, setTotal] = useState();

  const fetchData = async () => {
    const { data } = await Axios.get(requestEndpoint);
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
    dataField: 'platform',
    text: 'Platform'
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
     <h3>Total Games: {totalGames}</h3>
     
     <div>
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

export default MainTable;
