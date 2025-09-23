import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../src/components/DataTable';
import { Badge } from '../src/components/Badge';
import { Button } from '../src/components/Button';
import { Avatar, AvatarImage, AvatarFallback } from '../src/components/Avatar';
import { Eye, Edit, Trash2 } from 'lucide-react';
import React from 'react';

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive data table component with filtering, sorting, pagination, and row selection capabilities.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

// Sample data
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  avatar: string;
  joinDate: string;
}

const sampleUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64',
    joinDate: '2023-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Manager',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=64',
    joinDate: '2023-02-20',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Developer',
    status: 'inactive',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64',
    joinDate: '2023-03-10',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'Designer',
    status: 'pending',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64',
    joinDate: '2023-04-05',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    role: 'Analyst',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=64',
    joinDate: '2023-05-12',
  },
];

const userColumns = [
  {
    key: 'user',
    title: 'User',
    dataIndex: 'name' as keyof User,
    sortable: true,
    filterable: true,
    filterType: 'text' as const,
    render: (_: any, record: User) => (
      <div className="flex items-center space-x-3">
        <Avatar size="sm">
          <AvatarImage src={record.avatar} />
          <AvatarFallback>{record.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium text-gray-900">{record.name}</div>
          <div className="text-sm text-gray-500">{record.email}</div>
        </div>
      </div>
    ),
  },
  {
    key: 'role',
    title: 'Role',
    dataIndex: 'role' as keyof User,
    sortable: true,
    filterable: true,
    filterType: 'select' as const,
    filterOptions: [
      { label: 'Admin', value: 'Admin' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Developer', value: 'Developer' },
      { label: 'Designer', value: 'Designer' },
      { label: 'Analyst', value: 'Analyst' },
    ],
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status' as keyof User,
    sortable: true,
    filterable: true,
    filterType: 'select' as const,
    filterOptions: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Pending', value: 'pending' },
    ],
    render: (status: User['status']) => (
      <Badge 
        variant={
          status === 'active' ? 'success' : 
          status === 'inactive' ? 'secondary' : 'warning'
        }
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    ),
  },
  {
    key: 'joinDate',
    title: 'Join Date',
    dataIndex: 'joinDate' as keyof User,
    sortable: true,
    filterable: true,
    filterType: 'date' as const,
  },
  {
    key: 'actions',
    title: 'Actions',
    dataIndex: 'id' as keyof User,
    align: 'center' as const,
    render: (_: any, record: User) => (
      <div className="flex items-center justify-center space-x-1">
        <Button variant="ghost" size="sm">
          <Eye className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Trash2 className="h-4 w-4 text-danger-600" />
        </Button>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    columns: userColumns,
    dataSource: sampleUsers,
    rowKey: 'id',
    pagination: {
      current: 1,
      pageSize: 10,
      total: sampleUsers.length,
    },
  },
};

export const WithRowSelection: Story = {
  args: {
    columns: userColumns,
    dataSource: sampleUsers,
    rowKey: 'id',
    pagination: {
      current: 1,
      pageSize: 10,
      total: sampleUsers.length,
    },
    rowSelection: {
      type: 'checkbox',
      onChange: (selectedRowKeys: React.Key[], selectedRows: User[]) => {
        console.log('Selected:', selectedRowKeys, selectedRows);
      },
    },
  },
};

export const Bordered: Story = {
  args: {
    columns: userColumns,
    dataSource: sampleUsers,
    rowKey: 'id',
    bordered: true,
    pagination: {
      current: 1,
      pageSize: 10,
      total: sampleUsers.length,
    },
  },
};

export const Small: Story = {
  args: {
    columns: userColumns,
    dataSource: sampleUsers,
    rowKey: 'id',
    size: 'small',
    pagination: {
      current: 1,
      pageSize: 10,
      total: sampleUsers.length,
    },
  },
};

export const Loading: Story = {
  args: {
    columns: userColumns,
    dataSource: [],
    loading: true,
    rowKey: 'id',
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
  },
};

export const Empty: Story = {
  args: {
    columns: userColumns,
    dataSource: [],
    rowKey: 'id',
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
  },
};

export const WithTitle: Story = {
  args: {
    columns: userColumns,
    dataSource: sampleUsers,
    rowKey: 'id',
    pagination: {
      current: 1,
      pageSize: 10,
      total: sampleUsers.length,
    },
    title: () => (
      <div className="flex items-center justify-between p-4">
        <h3 className="text-lg font-semibold">User Management</h3>
        <Button variant="primary" size="sm">Add User</Button>
      </div>
    ),
  },
};
// Mobile Card Layout story for DataTable
export const MobileCardLayout: Story = {
  args: {
    columns: userColumns,
    dataSource: sampleUsers,
    rowKey: 'id',
    pagination: {
      current: 1,
      pageSize: 10,
      total: sampleUsers.length,
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Demonstrates the DataTable vertical card layout for mobile screens (below md breakpoint).',
      },
    },
  },
};