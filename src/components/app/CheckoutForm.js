import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Text from '../core/Text';
import Button from '../core/Button';
import Input from '../core/Input';
import Select from '../core/Select';
import Widget from '../core/Widget';
import Fieldset from '../core/Fieldset';

const CheckoutForm = ({ disabled }) => (
	<form>
		<Fieldset label="Delivery" mb={5}>
			<Widget label="Address" mb={4}>
				<Input name="address" fullWidth />
			</Widget>
			<Flex flexWrap="wrap" m={-3} mb={3}>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Zip code">
						<Input name="zip" fullWidth />
					</Widget>
				</Box>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Country">
						<Select name="country" fullWidth>
							<option>Berlin</option>
						</Select>
					</Widget>
				</Box>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="City">
						<Input name="city" fullWidth />
					</Widget>
				</Box>
			</Flex>
			<Flex flexWrap="wrap" m={-3} mb={3}>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="Date from">
						<Input name="datefrom" fullWidth />
					</Widget>
				</Box>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="Date to">
						<Input name="dateto" fullWidth />
					</Widget>
				</Box>
			</Flex>
		</Fieldset>
		<Fieldset label="Payment" mb={5}>
			<Widget label="Card number" mb={4}>
				<Input name="ccnumber" fullWidth />
			</Widget>
			<Flex flexWrap="wrap" m={-3} mb={3}>
				<Box width={[1, 1 / 2]} p={3}>
					<Widget label="Name on card">
						<Input name="ccname" fullWidth />
					</Widget>
				</Box>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Expiry date">
						<Input name="ccdate" placeholder="MM/YY" fullWidth />
					</Widget>
				</Box>
				<Box width={[1, 1 / 4]} p={3}>
					<Widget label="Security code">
						<Input name="cccode" fullWidth />
					</Widget>
				</Box>
			</Flex>
		</Fieldset>
		<Flex flexWrap="wrap" alignItems="baseline" m={-3}>
			<Box width={[1, 'auto']} p={3}>
				<Button type="submit" variant="primary" disabled={disabled}>
					Place an order
				</Button>
			</Box>
			<Box width={[1, 'auto']} p={3}>
				<Text variant="secondary">
					By clicking the “Place an order” button you agree to Rent-a-dog Terms
					and conditions
				</Text>
			</Box>
		</Flex>
	</form>
);

export default CheckoutForm;
