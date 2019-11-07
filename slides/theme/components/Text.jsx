import PropTypes from "prop-types";
import propTypes from "@styled-system/prop-types";
import styled from "@emotion/styled";
import { space, typography, variant, compose } from "styled-system";
import { css } from "@styled-system/css";

export const textStyles = {
	body: {
		fontSize: 2,
		color: "text",
	},
	secondary: {
		fontSize: 2,
		color: "secondary",
	},
};

const Text = styled.p(
	css({
		m: 0,
		lineHeight: 1.5,
		fontWeight: "normal",
		// color: "text",
	}),
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
