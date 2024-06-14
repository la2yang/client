import { useEffect, useState } from 'react'
import { getStuInfo } from '../Api/stuApi'
import { Table, Button } from 'antd'
import { useLocation } from 'react-router-dom'

const { Column } = Table

function Home() {
  const [stuList, setStuList] = useState([])

  const location = useLocation()

  useEffect(() => {
    getStuInfo().then((res) => {
      setStuList(() => {
        return res.data.map((item) => {
          return { ...item, key: item.id }
        })
      })

      console.log(res.data)
    })
  }, [])

  useEffect(() => {
    if (location.state) {
      console.log(location.state)
    }
  }, [location])

  return (
    <>
      <Button
        onclick={() => {
          console.log(location)
        }}
      >
        location
      </Button>
      <Table dataSource={stuList}>
        <Column title="name" dataIndex="name" key="id"></Column>
        <Column title="age" dataIndex="age" key="age"></Column>
        <Column title="gender" dataIndex="gender" key="gender"></Column>
        <Column title="major" dataIndex="major" key="major"></Column>
        <Column title="gpa" dataIndex="gpa" key="gpa"></Column>
        <Column title="courses" dataIndex="courses" key="courses"></Column>
      </Table>
    </>
  )
}
export default Home
