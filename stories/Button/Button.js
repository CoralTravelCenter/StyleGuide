import { html } from 'lit';
import './button.scss';

export const Button = ({ type, label, state }) => {
	let mode = null;

	switch (type) {
		case 'primary':
			mode = 'coral-button--primary';
			break;
		case 'secondary':
			mode = 'coral-button--secondary';
			break;
	}

	return html`
		<button
			type="button"
			class="coral-button ${mode}"
		>
			${label}
		</button>
	`;
};

