const knex = require('../database')



module.exports = {

    async index(req, res) {
        const results = await knex('funcionario')
        
        return res.json(results)
        }
    
    

}