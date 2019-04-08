import styled from 'styled-components';

/**
 * Render text that’s only “visible” for screen readers
 */
const VisuallyHidden = styled.div`
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	width: 1px;
	margin: -1px;
	padding: 0;
	overflow: hidden;
	position: absolute;
`;

/** @component */
export default VisuallyHidden;
