import React from 'react';
import Input from '../../components/primitives/Input';
import Button from '../../components/primitives/Button';
import Heading from '../../components/primitives/Heading';
import Stack from '../../components/layout/Stack';

export default function Prompt({ message, defaultValue, onSubmit, onClose }) {
	const [value, setValue] = React.useState(defaultValue);
	return (
		<Stack
			as="form"
			gap={4}
			onSubmit={event => {
				event.preventDefault();
				onSubmit(value);
			}}
		>
			<label>
				<Heading>{message}</Heading>
				<Input
					type="text"
					value={value}
					onChange={event => setValue(event.target.value)}
				/>
			</label>
			<div>
				<Button type="button" variant="secondary" onClick={onClose}>
					Cancel
				</Button>{' '}
				<Button type="submit" variant="primary">
					OK
				</Button>
			</div>
		</Stack>
	);
}
