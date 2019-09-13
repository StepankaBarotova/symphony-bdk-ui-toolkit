import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import ReactTable from 'react-table';
import Text from '../text';
import 'react-table/react-table.css';

import {
  ContextMenu,
  getEmptyTableColor,
  getStyleProps,
} from './theme';
import Loader from '../loader';
import Box from '../box';

const EmptyTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.5rem;
  border-radius: 3px;
  background-color: ${({ theme }) => getEmptyTableColor(theme)};
`;

const EmptyText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkgrey};
`;


const Table = ({
  data, columns, theme, loading, emptyMessage,
  hasActions,
  ...rest
}) => {
  if (loading) {
    return (
      <EmptyTable>
        <Loader type="v2" />
      </EmptyTable>
    );
  }

  if (!data || !data.length) {
    return <EmptyTable><EmptyText theme={theme}>{emptyMessage}</EmptyText></EmptyTable>;
  }

  const customColumns = columns.map((el) => {
    if (typeof el.Header === 'string') {
      el.Header = (<Text type="primary" size="small" style={{ fontWeight: 'bold' }}>{el.Header}</Text>);
    }
    // console.log(el.Cell);

    if (!el.Cell) {
      el.Cell = props => (<Text type="primary" size="small">{props.value}</Text>);
    }

    return el;
  });

  if (hasActions) {
    customColumns.push({
      accessor: null,
      sortable: false,
      Header: (<Text type="primary" size="small" style={{ fontWeight: 'bold' }}>Actions</Text>),
      Cell: (
        <ContextMenu>
          <Box vertical>
            <div>A</div>
            <div>B</div>
          </Box>
        </ContextMenu>),
    });
  }


  return (
    <ReactTable
      data={data}
      width={100}
      minRows={1}
      columns={customColumns}
      loading={loading}
      showPagination={false}
      {...getStyleProps(theme)}
      {...rest}
    />
  );
};

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  loading: PropTypes.bool,
  emptyMessage: PropTypes.string,
  hasActions: PropTypes.bool,
  theme: PropTypes.object.isRequired,

};

Table.defaultProps = {
  data: null,
  columns: null,
  loading: false,
  hasActions: false,
  emptyMessage: 'You have no content to display!',
};

export default withTheme(Table);
