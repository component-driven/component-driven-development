import React from 'react';
import PropTypes from 'prop-types';
import Prompt from './Prompt';

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
			{dialogs.map((dialog, index) =>
				React.cloneElement(dialog, { key: index })
			)}
		</DialogContext.Provider>
	);
}

export function useDialog() {
	return React.useContext(DialogContext);
}
