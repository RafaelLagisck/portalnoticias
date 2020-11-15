
module.exports = function (app){

    app.get('/noticias', function(req, res){

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
        
        
        //Para retornar uma consulta requer a query e um callback
        //connection.query(<sql>, callback);

        /* jeito antigo
        connection.query('select *from noticias', function(err, result) {
            res.render("noticias/noticias", {noticias : result});
        });
        */
        
    });
    
};
