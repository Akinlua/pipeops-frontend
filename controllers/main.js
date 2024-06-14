
const home = async (req, res) => {

    const test = "Hellow"
    
    res.render('main/home', {test})
}

module.exports = {
    home
}