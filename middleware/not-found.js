const noLayout = '../views/layouts/nothing.ejs'

const notFound = async (req, res) =>  {

    return res.render("error/error-404", {
        layout: noLayout,
    }) 
}

module.exports = notFound
