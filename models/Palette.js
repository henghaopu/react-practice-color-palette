const mongoose = require('mongoose');

const PaletteSchema = new mongoose.Schema({
  id: String,
  paletteName: String,
  emoji: String,
  colors: [
    {
      name: String,
      color: String,
    },
  ],
});

// https://stackoverflow.com/questions/14183611/mongoose-always-returning-an-empty-array-nodejs
module.exports = Palette = mongoose.model('Palette', PaletteSchema, 'palettes');
