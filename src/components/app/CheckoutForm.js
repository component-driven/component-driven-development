import React from 'react';
import { Form, Field } from 'formik';
import Box from '../primitives/Box';
import Flex from '../primitives/Flex';
import Text from '../primitives/Text';
import Button from '../primitives/Button';
import Input from '../primitives/Input';
import Select from '../primitives/Select';
import Heading from '../primitives/Heading';

// A form field with a label
const Widget = ({ label, children, ...props }) => {
	return (
		<Box {...props}>
			<Text as="label">
				<Box mb={2}>{label}</Box>
				{children}
			</Text>
		</Box>
	);
};

// A field set — a group of form fields with a heading.
const Fieldset = ({ label, children, ...props }) => {
	return (
		<Box as="fieldset" m={0} p={0} border="none" {...props}>
			<Heading size="lg" as="legend" mb={4}>
				{label}
			</Heading>
			{children}
		</Box>
	);
};

const CheckoutForm = ({ disabled }) => (
	<Form>
		<Fieldset label="Delivery" mb={5}>
			<Widget label="Address" mb={4}>
				<Field name="address">
					{({ field }) => (
						<Input autoComplete="shipping street-address" required {...field} />
					)}
				</Field>
			</Widget>
			<Flex flexWrap="wrap" m={-3} mb={3}>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Zip code">
						<Field name="zip">
							{({ field }) => (
								<Input
									autoComplete="shipping postal-code"
									required
									pattern="^[0-9]+$"
									{...field}
								/>
							)}
						</Field>
					</Widget>
				</Box>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Country">
						<Field name="country">
							{({ field }) => (
								<Select autoComplete="shipping country" required {...field}>
									<option>Berlin</option>
								</Select>
							)}
						</Field>
					</Widget>
				</Box>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="City">
						<Field name="city">
							{({ field }) => (
								<Input autoComplete="shipping locality" required {...field} />
							)}
						</Field>
					</Widget>
				</Box>
			</Flex>
			<Flex flexWrap="wrap" m={-3} mb={3}>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="Date from">
						<Field name="dateFrom">
							{({ field }) => <Input type="date" required {...field} />}
						</Field>
					</Widget>
				</Box>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="Date to">
						<Field name="dateTo">
							{({ field }) => <Input type="date" required {...field} />}
						</Field>
					</Widget>
				</Box>
			</Flex>
		</Fieldset>
		<Fieldset label="Payment" mb={5}>
			<Widget label="Card number" mb={4}>
				<Field name="cardnumber">
					{({ field }) => (
						<Input autoComplete="cc-number" required {...field} />
					)}
				</Field>
			</Widget>
			<Flex flexWrap="wrap" m={-3} mb={3}>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="Name on card">
						<Field name="ccname">
							{({ field }) => (
								<Input autoComplete="cc-name" required {...field} />
							)}
						</Field>
					</Widget>
				</Box>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Expiry date">
						<Field name="cc-exp">
							{({ field }) => (
								<Input
									autoComplete="cc-exp"
									placeholder="MM/YY"
									required
									{...field}
								/>
							)}
						</Field>
					</Widget>
				</Box>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Security code">
						<Field name="cvc">
							{({ field }) => (
								<Input autoComplete="cc-csc" required {...field} />
							)}
						</Field>
					</Widget>
				</Box>
			</Flex>
		</Fieldset>
		<Flex
			flexWrap="wrap"
			alignItems="baseline"
			justifyContent="flex-start"
			m={-3}
		>
			<Box width={[1, 'auto']} p={3}>
				<Button type="submit" variant="primary" disabled={disabled}>
					Place an order
				</Button>
			</Box>
			<Box width={[1, 'auto']} p={3}>
				<Text variant="tertiary">
					By clicking the “Place an order” button you agree to Rent-a-dog Terms
					and conditions
				</Text>
			</Box>
		</Flex>
	</Form>
);

export default CheckoutForm;
