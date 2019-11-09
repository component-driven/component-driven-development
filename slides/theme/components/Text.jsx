import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";
import styled from "@emotion/styled";
import { space, typography, variant, compose } from "styled-system";
import { css } from "@styled-system/css";

export const textStyles = {
	body: {
		fontSize: "m",
		color: "text",
	},
	secondary: {
		fontSize: "m",
		color: "secondary",
	},
};

const Text = styled.p(
	{
		margin: 0,
		lineHeight: 1.5,
		fontWeight: "normal",
	},
	compose(
		variant({ prop: "textStyle", variants: textStyles }),
		space,
		typography
	)
);

Text.propTypes = {
	...propTypes.margin,
	...propTypes.space,
	...propTypes.typography,
	textStyle: PropTypes.oneOf(Object.keys(textStyles)),
	as: PropTypes.string.isRequired,
};

/** @component */
export default Text;
