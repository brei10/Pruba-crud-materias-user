const Semestre = require("../models/semestre")


const semestreGet = async (req, res) => {

    const semestres = await Semestre.find().populate('materias materia_ingles');
    res.json(semestres);
}

const semestrePost = async (req, res) => {

    const { numero, carrera } = req.body;
    const semestre = new Semestre({ numero, carrera });
    await semestre.save()

    res.json({
        msg: "post api",
        semestre
    });
}
const semestrePut = async (req, res) => {

    const { id } = req.params;
    const { _id, ...all } = req.body

    try {

        const semestre = await Semestre.findByIdAndUpdate(id, all, { new: true })
        res.json({
            msg: "Actualizado!!",
            semestre

        })

    } catch (error) {
        console.log(error)
    }

}

const semestreDelete = async (req, res) => {
    const { id } = req.params

    try {
        await Semestre.findByIdAndDelete(id)

        res.json({
            msg: "usuario eliminado de la base de datos"
        });
    } catch (error) {
        console.log(error)
    }



}

module.exports = {
    semestreGet,
    semestrePost,
    semestrePut,
    semestreDelete

}