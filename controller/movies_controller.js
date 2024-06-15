const Movie = require("../model/movie");
const movie = require("../model/movie");

module.exports = {
    //Create new movie
    async create (req, res) {
        try{
            const {title, genre, releaseYear, rating} = req.body;
            const newMovie = await movie.create({title,genre,releaseYear,rating});
            res.status(200).json({
                'success':true,
                'data':newMovie,
            });
        }catch(error){
            console.log("Error catching movie: ", error);
            res.status(500).json({'Error': 'internal server error'});

        }
    },
    //Get all movies from database
    async getAll(req,res){
        try{
            const movies = await movie.findAll();
            res.status(200).send(movies);

        }catch(error){
            console.log("Error catching movie: ", error);
            res.status(500).json({'Error': 'internal server error'});
        }
    },

    //Update an movie by id
    async update(req,res){
        try{
            const {movieId} = req.params;
            const updatedMovie = req.body;
            const movieToUpdate = await Movie.findByPk(movieId);
            if(movieToUpdate){
                await movieToUpdate.update(updatedMovie);
                res.status(200).json({
                    'Success': true,
                    'Message':'Movie updated succesfully',
                });
            }else{
                res.status(404).send("Movie id doesn't exist");
            }
        }catch(error){
            console.log("Error catching movie: ", error);
            res.status(500).json({'Error': 'internal server error'});
        }
    },

    //Delete an movie by id
    async delete(req,res){
        try{
            const {movieId} = req.params;
            const movie = await Movie.findByPk(movieId);
            console.log(movie);
            if(movie){
                await  movie.destroy();
                res.status(200).json({
                    'Success': true,
                    'Message':'Movie removed succesfully',
                });
            }else{
                res.status(404).send("Movie don't found");
            }

        }catch(error){
            console.log("Error removing movie: ",error);
            res.status(500).json({
                'Error':'Internar server error'
            });
        }
    }
}