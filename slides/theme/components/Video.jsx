
import styled from '@emotion/styled';
import Box from './Box';

export const Video = styled(Box)({
	display: 'block',
	objectFit: 'contain',
});

Video.defaultProps = {
	as: 'video',
};

export default Video;
