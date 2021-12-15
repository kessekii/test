import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'song_name', headerName: 'Song Name', width: 130 },
  { field: 'band', headerName: 'Band', width: 130 },
  { field: 'year', headerName: 'Year', width: 70 },
];

export default function DataTable({data}) {

if (data.length > 0) {
  var rows = data
}

  return ( data.length > 0 ? 
    <div style={{ height: 400, width: 330 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div> : <div></div>
  );
}