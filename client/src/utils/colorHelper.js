import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/**
 *
 * @param { object } starterPalette stored in db
 */
export function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {
      // 50: []
      // 100: []
      // ...
    },
  };
  levels.forEach((level) => (newPalette.colors[level] = []));
  starterPalette.colors.forEach(({ name, color }) => {
    let scale = generateScale(color, levels.length);
    scale.forEach((level, i) =>
      newPalette.colors[levels[i]].push({
        name: `${name} ${levels[i]}`,
        id: `${name.toLowerCase().replace(/ /g, '-')}`,
        hex: level,
        rgb: chroma(level).css(),
        rgba: chroma(level).css().replace('rgb', 'rgba').replace(')', ',1.0)'),
      })
    );
  });

  return newPalette;
}

// return 10 colors based on the input color
function generateScale(hexColor, numOfColors) {
  return chroma
    .scale(generateColorRange(hexColor))
    .mode('lab')
    .colors(numOfColors);
}

function generateColorRange(hexColor) {
  const white = '#fff';
  return [white, hexColor, chroma(hexColor).darken(1.4).hex()];
}
