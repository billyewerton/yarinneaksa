'use strict'


exports.main = (req,res) => {

res.status(201).render('layouts//index.ejs', {
        title: 'Dashboard',
        user: req.user,
        banco: []

    })
}