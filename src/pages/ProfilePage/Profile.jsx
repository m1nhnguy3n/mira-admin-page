import {
  EnvironmentOutlined,
  ExportOutlined,
  FacebookFilled,
  HomeTwoTone,
  InstagramOutlined,
  ShoppingFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Flex, Row, Table, Tag, Typography } from "antd";
import { Link } from "react-router-dom";
import EChartsComponent from "./Chart";
import TableProfile from "./TableProfile";
import "./Profile.scss";
import CardProfile from "./CardProfile";

const { Title, Text } = Typography;
const Profile = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Col className="bg-[#233044] py-4 p-6 mb-8 rounded-lg w-full">
            <Title level={4}>Profile Details</Title>
            <Col span={24} className="flex justify-center">
              <img
                className="rounded-full w-32 "
                src="https://mira.bootlab.io/static/img/avatars/avatar-1.jpg"
                alt=""
              />
            </Col>

            <Col className="text-center py-2 ">
              <Text>Lucy Lavender</Text>
            </Col>
            <Col className="text-center">
              <Text> Lead Developer</Text>
            </Col>
            <Col className="flex justify-center">
              <Col className="px-1 ">
                <Button type="primary">Follow</Button>
              </Col>
              <Col className="px-1">
                <Button type="primary">Message</Button>
              </Col>
            </Col>
          </Col>
          <Col className="bg-[#233044] py-4 p-4 mb-8 rounded-lg ">
            <Title level={4}>Skill</Title>
            <Divider />
            <Flex gap="4px 0" wrap="wrap">
              <Tag className="bg-blue-800" bordered={false} color="processing">
                HTML
              </Tag>
              <Tag bordered={false}>Javascript</Tag>
              <Tag bordered={false}>Sass</Tag>
              <Tag bordered={false}>React</Tag>
              <Tag bordered={false}>Redux</Tag>
              <Tag bordered={false}>Next.js</Tag>
              <Tag bordered={false}>Material UI</Tag>
              <Tag bordered={false}>UI</Tag>
              <Tag bordered={false}>UX</Tag>
            </Flex>
          </Col>
          <Col className="bg-[#233044] py-4 p-4 mb-8 rounded-lg">
            <Col>
              <Title level={4}>About</Title>
            </Col>
            <Col>
              <HomeTwoTone />
              <Text> Lives in </Text>
              <Link className="pl-2 text-[#407AD6]">San Fransisco, SA</Link>
            </Col>
            <Col>
              <ShoppingFilled />
              <Text> Lives in </Text>
              <Link className="pl-2 text-[#407AD6]">SMaterial UI</Link>
            </Col>
            <Col>
              <EnvironmentOutlined />
              <Text> Lives in </Text>
              <Link className="pl-2 text-[#407AD6]">Boston</Link>
            </Col>
          </Col>
          <Col className="bg-[#233044] py-4 p-4  rounded-lg">
            <Col>
              <Title level={4}>Elsewhere</Title>
            </Col>
            <Col>
              <ExportOutlined />

              <Link className="pl-2 text-[#407AD6]">lucylavender.io</Link>
            </Col>
            <Col>
              <TwitterOutlined />

              <Link className="pl-2 text-[#407AD6]">Twitter</Link>
            </Col>
            <Col>
              <FacebookFilled />

              <Link className="pl-2 text-[#407AD6]">Facebook</Link>
            </Col>
            <Col>
              <InstagramOutlined />

              <Link className="pl-2 text-[#407AD6]">Instagram</Link>
            </Col>
          </Col>
        </Col>
        <Col span={18}>
          <EChartsComponent />
          <CardProfile />
          <TableProfile />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
