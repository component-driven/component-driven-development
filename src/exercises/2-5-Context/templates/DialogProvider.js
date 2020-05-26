import React from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt';

// WORKSHOP_START
export function DialogProvider(props) {
	return (
		<div>Your code here</div>
	);
}
// WORKSHOP_END

// FINAL_START
export const DialogContext = React.createContext({});

export function DialogProvider({ children }) {
	const [dialogs, setDialog] = React.useState([]);

	function openDialog(dialog) {
		setDialog(dialogs => [...dialogs, dialog]);
	}

	function closeDialog() {
		setDialog(dialogs => dialogs.slice(0, -1));
	}

	function prompt({ title, message, defaultValue }) {
		return new Promise(resolve => {
			openDialog(
				<Prompt
					isOpen
					title={title}
					message={message}
					defaultValue={defaultValue}
					onClose={closeDialog}
					onSubmit={resolve}
				/>
			);
		});
	}

	return (
		<DialogContext.Provider
			value={{
				openDialog,
				closeDialog,
				prompt,
			}}
		>
			{children}
			{dialogs}
		</DialogContext.Provider>
	);
}

export function useDialog() {
  return React.useContext(DialogContext);
}
// FINAL_END
