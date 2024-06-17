import fs from 'fs';
import _ from 'lodash';

fs.readFile('./tokens.json', 'utf-8', (err, data) => {
	if (err) throw err;

	const colorTokens = _.map(JSON.parse(data)[0].Color_Tokens.modes.B2CLight, (value, key) => {
		return `--${key}: ${value['$value']}`;
	});
	const dimensionTokens = _.map(_.values(JSON.parse(data)[1].Dimension_Tokens.modes.Coral), item =>
		_.mapValues(item, valueObj => `${valueObj['$value']}px`)
	);

	function toCssVariables(obj) {
		return _.map(obj, (value, key) => `--${key}: ${value};`).join('');
	}

	const cssDimensionsVariables = _.map(dimensionTokens, toCssVariables).join('');
	const cssColorVariables = _.map(colorTokens).join(';');
	let cssContent = `:root {${cssColorVariables} ;\n ${cssDimensionsVariables}}`;

	fs.writeFile('./stories/tokens.css', cssContent, (err) => {
		if (err) throw err;
		console.log('CSS файл с токенами успешно создан.');
	});
})