import { Table, Space, Tag } from 'antd'
import { ProTable } from '@ant-design/pro-components'
import { getStuInfo } from '../Api/stuApi'
import { useEffect, useState } from 'react'

const { Column } = Table

function Home() {
  const columns = [
    {
      title: '名字',
      dataIndex: 'name',
      copyable: true,
      ellipsis: true,
      tooltip: '标题过长会自动收缩',

      width: '30%',
    },
    {
      title: '状态',
      dataIndex: 'state',
      filters: true,
      onFilter: true,
      valueType: 'select',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      valueEnum: {
        0: { text: '未提交', status: 'Default' },
        1: { text: '已提交', status: 'Success' },
        2: { text: '已批改', status: 'Error' },
      },
    },
    {
      title: 'gpa',
      dataIndex: 'gpa',
      valueType: 'select',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      valueEnum: {
        greaterThanOrEqualTo375: { text: 'A', status: 'Success' },
        between: { text: 'B', status: 'Warning' },
      },
    },
    {
      title: '课题',
      dataIndex: 'courses',
      search: false,
      ellipsis: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },

      renderFormItem: (_, { defaultRender }) => {
        return defaultRender(_)
      },
      render: (_, record) => (
        <Space>
          {record.courses.map((name) => (
            <Tag key={name} color="red">
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'created_at',
      valueType: 'date',
      hideInSearch: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
  ]

  // useEffect(() => {
  //   getStuInfo().then((res) => {
  //     console.log(res)
  //   })
  // }, [])

  return (
    <>
      <ProTable
        columns={columns}
        request={async () => {
          const res = await getStuInfo()
          console.log(res.data)
          return {
            success: true,
            data: res.data,
          }
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          ignoreRules: false,
        }}
        dateFormatter="string"
        headerTitle="高级表格"
      />
    </>
  )
}
export default Home
