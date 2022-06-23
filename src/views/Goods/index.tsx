import React, { useState } from 'react'
import Panel from '@/layouts/Panel'
import { Table } from 'antd'

const Goods = (props: any) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Address',
      dataIndex: 'address'
    },
    {
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3
      }
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2
      }
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1
      }
    }
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      address: '武汉市江岸区花桥社区701',
      chinese: 98,
      math: 60,
      english: 70
    },
    {
      key: '2',
      name: 'Jim Green',
      address: '武汉市江岸区花桥社区701',
      chinese: 98,
      math: 66,
      english: 89
    },
    {
      key: '3',
      name: 'Joe Black',
      address: '武汉市江岸区花桥社区701',
      chinese: 98,
      math: 90,
      english: 70
    },
    {
      key: '4',
      name: 'Jim Red',
      address: '武汉市江岸区花桥社区701',
      chinese: 88,
      math: 99,
      english: 89
    }
  ]

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra)
  }

  return (
    <Panel title="查询表格">
      <Table
        size="small"
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </Panel>
  )
}

export default Goods
