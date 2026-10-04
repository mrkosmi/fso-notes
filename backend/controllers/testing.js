const router = require('express').Router()
const Note = require('../models/note')
const user = require('../models/user')

router.post('/reset', async (request, response) => {
    await Note.deleteMany({})
    await user.deleteMany({})

    response.status(204).end()
})

module.exports = router