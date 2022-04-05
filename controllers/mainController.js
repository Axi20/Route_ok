const getRequest = (req, res) => {
    const adatok = {
        nev: 'Jane Doe'
    };

    res.render('megjelenit', {adatok});
};

const postRequest = (req, res) => {
    console.log(req.body);
    res.send(req.body);
};

module.exports = {getRequest, postRequest};