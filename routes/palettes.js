const express = require('express');
const router = express.Router(); // mini-app

/**
 * @route         GET api/v1/palettes
 * @description   Get all the color palettes from db
 * @access        Public
 */
router.get('/', (req, res) => {
  // access db

  res.status(200).send({ success: true, data: { msg: 'Get all palettes' } });
});

module.exports = router;
