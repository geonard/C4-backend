const express = require('express');
const debug = require('debug')('app:router'); // Ajout de debug
const router = express.Router();

router.get('/', (req, res) => {
    debug('Route GET / appelée'); // Message de débogage
    res.json('Hello world!!');
});

router.use((req, res) => {
    debug('Page non trouvée'); // Message de débogage
    res.status(404).json({
        error: 'Page not found',
    });
});

module.exports = router;
