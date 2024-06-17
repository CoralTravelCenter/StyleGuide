import {Button} from './Button';

export default {
	title: 'Molecules/Button',
	tags: ['autodocs'],
	render: (args) => Button(args),
	argTypes: {
		type: {
			options: ['primary', 'secondary'],
			control: {type: 'select'},
			description: 'Тип компонента'
		},
		state: {
			control: 'boolean',
			description: 'Состояние компонента'
		}
	}
};

export const Primary = {
	args: {
		label: 'Кнопка',
		type: "primary",
		state: false
	},
};

export const Secondary = {
	args: {
		label: 'Кнопка',
		type: "secondary",
		state: false
	},
};


