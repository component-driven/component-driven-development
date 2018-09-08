import styled from 'styled-components';
import { space } from 'styled-system';

const Media = styled.div`
	display: flex;
	align-items: flex-start;
`;

const Image = styled.footer`
	${({ theme }) => space({ theme, mr: 3 })};
`;

const Body = styled.footer`
	flex: 1;
`;

Media.Image = Image;
Media.Body = Body;

/**
 * Media object
 * @component
 */
export default Media;
