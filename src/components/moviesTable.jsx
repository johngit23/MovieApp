import React, {Component} from 'react';
import Table from './common/table';

class MoviesTable extends Component {
  columns = [
    {path:'title' , label: 'Title'},
    {path:'genre.name' , label: 'Genre'},
    {path:'numberInStock' , label: 'Stock'},
    {path:'dailyRentalRate' , label: 'Rate'},
    { key: 'delete', 
    content: movie =>  (
      <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button> 
    )}
]

    render() {
        const { movies, onSort, sortColumn } = this.props;
 
        return (
            <Table 
              data={movies}
              columns={this.columns}
              onSort={onSort}
              sortColumn={sortColumn}
            />
        )   
    }
}
 
export default MoviesTable;

