import {Slider} from './Slider';

export default {
	title: 'Atomic/Slider',
	tags: ['autodocs'],
	render: (args) => Slider(args),
	argTypes: {
		title: {type: 'string', defaultValue: 'Why is type undefined?'}
	}
};

export const Gallery = {
	args: {
		title: 'City Slider'
	},
};



