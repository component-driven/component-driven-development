import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Footer = styled.footer`
	margin-top: auto;
`;

/**
 * Page container to create a sticky footer.
 * @component
 */
export default { Container, Footer };
