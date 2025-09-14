export interface Column<T = any> {
  key: string;
  title: string;
  dataIndex: keyof T;
  width?: number | string;
  sortable?: boolean;
  filterable?: boolean;
  filterType?: 'text' | 'select' | 'date' | 'number';
  filterOptions?: Array<{ label: string; value: any }>;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export interface FilterValue {
  [key: string]: any;
}

export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc' | null;
}

export interface PaginationConfig {
  current: number;
  pageSize: number;
  total: number;
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  showQuickJumper?: boolean;
}

export interface RowSelection<T = any> {
  type?: 'checkbox' | 'radio';
  selectedRowKeys?: React.Key[];
  onChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
  getCheckboxProps?: (record: T) => { disabled?: boolean };
  onSelect?: (record: T, selected: boolean, selectedRows: T[], nativeEvent: Event) => void;
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
}

export interface DataTableProps<T = any> {
  columns: Column<T>[];
  dataSource: T[];
  loading?: boolean;
  rowKey?: string | ((record: T) => React.Key);
  pagination?: PaginationConfig | false;
  rowSelection?: RowSelection<T>;
  scroll?: { x?: number | string; y?: number | string };
  size?: 'small' | 'middle' | 'large';
  bordered?: boolean;
  showHeader?: boolean;
  title?: () => React.ReactNode;
  footer?: () => React.ReactNode;
  expandable?: {
    expandedRowRender?: (record: T, index: number) => React.ReactNode;
    rowExpandable?: (record: T) => boolean;
  };
  onRow?: (record: T, index?: number) => React.HTMLAttributes<HTMLTableRowElement>;
  className?: string;
  // Callback functions
  onSort?: (sortConfig: SortConfig) => void;
  onFilter?: (filters: FilterValue) => void;
  onChange?: (pagination: PaginationConfig, filters: FilterValue, sorter: SortConfig) => void;
}

export interface TableContextValue {
  prefixCls: string;
  size: 'small' | 'middle' | 'large';
}