import styled from 'styled-components';
import { darken } from 'polished';
import Text from '../text';
import Box from '../box';
import { THEME_TYPES } from '../../../styles/colors';

export const ALIGNMENTS = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'space-between',
};

const getAlignment = align => ALIGNMENTS[align] || ALIGNMENTS.center;

export const StyledTable = styled.div`
  border-radius: 4px;
  border-spacing: 0;
`;

export const THead = styled.div`
  background-color: ${({ theme }) => theme.colors.grey_100};
  padding-top: 2px;
  border-top: 2px solid ${({ theme }) => theme.colors.grey_100};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const THeadTr = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ align }) => getAlignment(align)};
`;

export const THeadTh = styled.div`
  padding: 10px;
  border-right: none;
  align-items: center;
`;

export const TBodyTr = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey_100};
  transition: background-color 0.2s;
  display: flex;
  width: 100%;
  justify-content: ${({ align }) => getAlignment(align)};
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_200};
  }
`;

export const TBody = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.grey_100};
  overflow: scroll;
  overflow-x: auto;
  overflow-y: auto;
  width: calc(100% - 4px);
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : undefined)};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const TBodyTd = styled.div`
  padding: 10px;
`;

export const EmptyTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.5rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey_100};
`;

export const EmptyText = styled(Text)`
  color: ${({ theme }) => theme.colors.grey_400};
`;

export const SearchWrapper = styled.div`
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.grey_100};
`;

export const InputWrapper = styled.div`
  position: relative;
  padding: 8px;
  width: 280px;
`;
export const SearchIconWrapper = styled.div`
  position: absolute;
  z-index: 4;
  left: 14px;
  top: 17px;
`;
export const InputFieldBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.mainbackground};
`;

export const HeaderText = styled(Text)`
  line-height: 1.2rem;
  user-select: none;
  color: ${({ theme }) => (theme.mode === THEME_TYPES.DARK ? theme.colors.white : darken(0.2, theme.colors.grey_400))};
`;

export const IconWrapper = styled.div`
  margin-left: 8px;
`;
export const IconSpinner = styled.div`
  transform-origin: 50% 50%;
  transition: all 0.2s;
  transform: ${({ desc }) => (desc ? 'rotate(0)' : 'rotate(180deg)')};
`;
export const CellWrapper = styled(Box)`
  margin: 0px 19px;
  align-items: start;
  justify-content: center;
  height: 100%;
`;
export const ToolTipContainer = styled.span`
  display: flex;
  align-items: start;
`;

export const MenuWrapper = styled(Box)`
  padding: 0;
  margin: 0px 19px;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const MenuItem = styled(Box)`
  height: 35px;
  padding-left: 15px;
  border-left: 4px solid transparent;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_100};
    border-top-left-radius: ${props => (props.isFirst ? '4px' : null)};
    border-bottom-left-radius: ${props => (props.isLast ? '4px' : null)};
    border-left: ${({ theme, accent }) => `4px solid ${theme.colors[accent]}`};
  }
`;

export const getMenuBackgroundColor = theme => ({
  style: {
    padding: '0px',
    borderRadius: '4px',
    border: `1px solid ${theme.colors.grey_200}`,
    backgroundColor: theme.colors.mainbackground,
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  },
});

/*  Context Menu */
const CONTEXT_COLORS = {
  neutral: 'grey_700',
  info: 'primary_500',
  error: 'error_500',
  warning: 'warning_500',
  success: 'success_50',
};
const getContextItemColor = ({ theme, contextType }) => {
  if (!contextType || !CONTEXT_COLORS[contextType]) {
    return CONTEXT_COLORS.neutral;
  }
  return theme.colors[CONTEXT_COLORS[contextType]];
};
export const ContextText = styled(Text)`
  font-weight: bold;
  color: ${props => getContextItemColor(props)};
`;
