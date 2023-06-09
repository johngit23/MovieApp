import React, { Component } from 'react';
import { getMovies } from 'services/fakeMovieService';
import { getGenres } from 'services/fakeGenreService';
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { paginate } from './utils/paginate';
import _ from 'lodash';

class Movies extends Component {
    state = { 
        movies : [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: {path: 'title', order: 'asc'}
     };
     componentDidMount() {
        const genres = [{_id:"", name: "All Genres"} , ...getGenres()]

        this.setState({ movies: getMovies(), genres })
     }

     handlePageChange = page => {
        this.setState({ currentPage : page })
    }
     
     handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies})
    }
    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }
    handleSort = sortColumn => {
        this.setState({ sortColumn })
    } 
    getPagedData = () => {
        const {pageSize, selectedGenre, movies : allMovies, currentPage, sortColumn} = this.state
        const filtered = selectedGenre && selectedGenre._id 
            ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies = paginate(sorted, currentPage, pageSize)

        return { totalCount: filtered.length, data: movies }
    }
    render() { 
        const { length : count } = this.state.movies
        const {pageSize, currentPage, sortColumn} = this.state

        if(count === 0) return <p>There are no movies in the database</p>

        const { totalCount, data: movies } = this.getPagedData()

        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup 
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect} 
                    />
                </div>
                <div className="col">
                    <p>Showing {totalCount} movies in the database</p>

                    <MoviesTable 
                        movies={movies}
                        onSort={this.handleSort}
                        sortColumn={sortColumn}
                        onDelete={this.handleDelete}
                    />
                    <Pagination 
                        itemsCount={totalCount} 
                        pageSize={pageSize} 
                         onPageChange={this.handlePageChange} 
                         currentPage = {currentPage}
                    />
                </div>
            </div>
        );
    }
}
 
export default Movies;