import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal, Form, Row, Col, Radio, Switch } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

import SelectColor from '@/components/basic/SelectColor'
import settingOption from './option.d'

import { IStoreState } from '@/store/types'
import { SettingState } from '@/store/modules/setting'

const SettingModal = () => {
  const [form] = Form.useForm()

  const { layout, fixedSetting, contentWidth }: SettingState = useSelector(
    (state: IStoreState) => state.settings
  )

  const [isModalVisible, setModalVisible] = useState(false)

  console.log(settingOption.primaryColor.values)

  const handleConfirm = () => {}

  const onFinish = () => {}

  const formTemplate = (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Row>
        <Col span={14}>
          <Form.Item name="user" label="整体风格">
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">亮色菜单风格</Radio.Button>
              <Radio.Button value="b">暗色菜单风格</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="user" label="导航模式">
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">侧边菜单布局</Radio.Button>
          <Radio.Button value="b">顶部菜单布局</Radio.Button>
          <Radio.Button value="c">混合菜单布局</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Row>
        <Col span={14}>
          <Form.Item name="user" label={settingOption.primaryColor.name}>
            <SelectColor defaultValue="#34b5e0">
              {settingOption.primaryColor.values.map(
                (item: any, index: number) => (
                  <SelectColor.Item value={item.value} key={index} />
                )
              )}
            </SelectColor>
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item name="user" label={settingOption.sidebarColor.name}>
          <SelectColor defaultValue="#34b5e0">
            {settingOption.sidebarColor.values.map(
              (item: any, index: number) => (
                <SelectColor.Item value={item.value} key={index} />
              )
            )}
            </SelectColor>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Form.Item name="user" label="菜单主题">
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">流式</Radio.Button>
              <Radio.Button value="b">定宽</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>

        <Col span={7}>
          <Form.Item name="user" label="固定头部">
            <Switch defaultChecked />
          </Form.Item>
        </Col>

        <Col span={7}>
          <Form.Item name="user" label="导航栏">
            <Switch defaultChecked />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )

  return (
    <>
      <SettingOutlined onClick={() => setModalVisible(true)} />
      <Modal
        title="自定义主题"
        visible={isModalVisible}
        onOk={() => handleConfirm()}
        onCancel={() => setModalVisible(false)}
      >
        {formTemplate}
      </Modal>
    </>
  )
}

export default SettingModal
