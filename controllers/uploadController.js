const getRequest = (req, res) => {
    res.render('index');
};

const postRequest = (req, res) => {
    const adatok = req.body;
    res.send(adatok);
};

module.exports = {getRequest, postRequest};