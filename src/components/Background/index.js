import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../styles';

export default styled(LinearGradient).attrs({
  colors: [colors.primary, colors.primary2],
})`
  flex: 1;
`;
