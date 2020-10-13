const knex = require('../database')



module.exports = {

    async index(req, res) {
        const results = await knex('funcionario')
        return res.json(results)
    },
    async create(req, res, next) {
        try{

            await knex('funcionario').insert(req.body)

            return res.status(201).send()
        } catch(error) {
            next(error)
        }
    },
    async update(req, res, next) {
        try{
            const { id_funcionario } = req.params
            await knex('funcionario')
            .update(req.body)
            .where({id_funcionario})


            return res.send()

        } catch(error){
            next(error)
        }
    },
    async delete(req, res, next) {
        try{
            const { id_funcionario } = req.params
            await knex('funcionario')
            .where({ id_funcionario })
            .del()

            return res.send()
        } catch(error) {
            next(error);
        }
    }


}