const movie_controller =require("../controller/movies_controller.js");

module.exports= (app) => {
    app.post('/api/movies/create', movie_controller.create);
    app.get('/api/movies/getAll', movie_controller.getAll);
    app.put('/api/movies/update/:movieId',movie_controller.update);
    app.delete('/api/movies/delete/:movieId', movie_controller.delete);
};