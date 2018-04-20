import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '../../components/core/Text';

/**
 * A link.
 */
const Link = styled(Text).attrs({ is: 'a' })``;

/** @component */
export default Link;
