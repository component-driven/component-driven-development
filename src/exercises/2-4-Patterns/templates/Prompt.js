import React from 'react';
import PropTypes from 'prop-types';
import {
	Dialog,
	DialogContent,
	DialogBackdrop,
	DialogHeader,
	DialogBody,
	DialogFooter,
	DialogCloseButton,
} from './Dialog';

// WORKSHOP_START
export default function Prompt(prompt) {
	return (<div>TODO</div>);
}

Prompt.propTypes = {
};
// WORKSHOP_END
// FINAL_START
export default function Prompt({
	isOpen,
	title,
	message,
	defaultValue,
	onClose,
	onSubmit,
}) {
	const [value, setValue] = React.useState(defaultValue);
	return (
		<Dialog isOpen={isOpen}>
			<DialogBackdrop onClose={onClose} />
			<DialogContent>
				<DialogCloseButton onClose={onClose} />
				<form
					onSubmit={event => {
						event.preventDefault();
						onSubmit(value);
						onClose();
					}}
				>
					<DialogHeader>{title}</DialogHeader>
					<DialogBody>
						<label>
							{message}
							<br />
							<input
								type="text"
								value={value}
								onChange={event => setValue(event.target.value)}
							/>
						</label>
					</DialogBody>
					<DialogFooter>
						<button type="button" onClick={onClose}>
							Cancel
						</button>
						<button type="submit">OK</button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}

Prompt.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};
// FINAL_END
