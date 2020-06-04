const express = require('express');
const router = express.Router(); // mini-app
const Palette = require('../../models/Palette');

/**
 * @route         GET api/v1/palettes
 * @description   Get all the color palettes from db
 * @access        Public
 */
router.get('/', async (req, res) => {
  try {
    // access db
    const palettes = await Palette.find();
    if (!palettes) {
      return res.status(400).json({ msg: 'There is no palette' });
    }
    // send data back to client
    res.status(200).send(palettes);

    // const colors = await Color.find();
    // res.status(200).send(colors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
  // res.status(200).send({ success: true, data: { msg: 'Get all palettes' } });
});

module.exports = router;
