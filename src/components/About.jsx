import {
  ProCard,
  ProForm,
  ProFormRadio,
  ProFormText,
  ProFormDatePicker,
} from '@ant-design/pro-components'

function About() {
  return (
    <>
      <ProCard>
        <ProForm
          onFinish={(values) => console.log(values)}
          initialValues={{ radio: '111', name: 'zhang' }}
          layout="horizontal"
        >
          <ProFormRadio.Group
            name="radio"
            options={['111', '222']}
          ></ProFormRadio.Group>
          <ProFormText
            width="md"
            name="name"
            label="签约客户名称"
            tooltip="最长为 24 位"
            placeholder="请输入名称"
          />
          <ProFormDatePicker name="date"></ProFormDatePicker>
        </ProForm>
      </ProCard>
    </>
  )
}
export default About
