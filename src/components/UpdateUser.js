
import React from "react";
import {
  Layout,
  Menu,
  Button,
  Typography,
  Card,
  Form,
  Input,
} from "antd";

import { Link } from "react-router-dom";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const {  Footer, Content } = Layout;
const UpdateUser = () => {
    return (
      <>
        <div className="layout-default ant-layout layout-sign-up">

          <Content className="p-0">
            <div className="sign-up-header">
              <div className="content">
                <Title>Update User</Title>
              </div>
            </div>

            <Card
              className="card-signup header-solid h-full ant-card pt-0"
              bordered="false"
            >
              <Form
                name="basic"
                initialValues={{ remember: true }}
                className="row-col"
              >
               <Form.Item
                  name="UserName"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input placeholder="UserName" />
                </Form.Item>
                
                <Form.Item
                  name="PassWord"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>
                <Form.Item name="Email" rules={[{ required: true, message: "Please input your email!" }]}>
                  <Input placeholder="Email" />
                  </Form.Item>

                <Form.Item name="FirstName" rules={[{ required: true, message: "Please input your FirstName!" }]}>
                  <Input placeholder="FirstName" />
                  </Form.Item>
                <Form.Item name="SurName" rules={[{ required: true, message: "Please input your SurName!" }]}>
                  <Input placeholder="SurName" />
                  </Form.Item>
                <Form.Item name="FullName" rules={[{ required: true, message: "Please input your FullName!" }]}>
                  <Input placeholder="FullName" />
                  </Form.Item>

                <Form.Item name="ProvinceName" rules={[{ required: true, message: "Please input your ProvinceName!" }]}>
                  <Input placeholder="ProvinceName" />
                  </Form.Item>
                <Form.Item name="DistrictName" rules={[{ required: true, message: "Please input your DistrictName!" }]}>
                  <Input placeholder="DistrictName" />
                  </Form.Item>
                <Form.Item name="WardName" rules={[{ required: true, message: "Please input your WardName!" }]}>
                  <Input placeholder="WardName" />
                </Form.Item>
                <Form.Item name="AddressNo" rules={[{ required: true, message: "Please input your AddressNo!" }]}>
                  <Input placeholder="AddressNo" />
                </Form.Item>
                <Form.Item name="FullNameA" rules={[{ required: true, message: "Please input your FullNameA!" }]}>
                  <Input placeholder="FullNameA" />
                </Form.Item>

                <Form.Item name="DateOfBir" rules={[{ required: true, message: "Please input your DateOfBir!" }]}>
                  <Input placeholder="DateOfBir" />
                </Form.Item>
                <Form.Item name="IntroduceYourself" rules={[{ required: true, message: "Please input your IntroduceYourself!" }]}>
                  <Input placeholder="IntroduceYourself" />
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    htmlType="submit"
                  >
                    SIGN UP
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Content>
          <Footer>
            <Menu mode="horizontal">
              <Menu.Item>Company</Menu.Item>
              <Menu.Item>About Us</Menu.Item>
              <Menu.Item>Teams</Menu.Item>
              <Menu.Item>Products</Menu.Item>
              <Menu.Item>Blogs</Menu.Item>
              <Menu.Item>Pricing</Menu.Item>
            </Menu>
            <Menu mode="horizontal" className="menu-nav-social">
              <Menu.Item>
                <Link to="#">{<DribbbleOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<TwitterOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<InstagramOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<GithubOutlined />}</Link>
              </Menu.Item>
            </Menu>
          </Footer>
        </div>
      </>
    );
  }

export default UpdateUser;