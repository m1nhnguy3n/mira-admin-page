import { LogoutOutlined } from '@ant-design/icons';
import { Col, Menu, Row, Layout } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import DashboardSvg from '../assets/DashboardSvg';
import OrderSvg from '../assets/OrderSvg';
import PageSvg from '../assets/PageSvg';
const { Sider } = Layout;

const MenuSider = () => {
    const { t } = useTranslation();

    const location = useLocation();

    const items = [
      {
        key: "6",
        icon: <DashboardSvg />,
        label: t("SIDE_BAR.DASHBOARD"),
        children: [
          {
            key: "1",
            label: "Analytics",
            path: "/dashboard",
          },
        ],
      },
      {
        key: "2",
        icon: <PageSvg />,
        label: t("SIDE_BAR.PAGE"),
        children: [
          {
            key: "3",
            label: "Profile",
            path: "/profile",
          },
          {
            key: "4",
            label: "Pricing",
            path: "/Pricing",
          },
        ],
      },
      {
        key: "5",
        icon: <OrderSvg className="w-3 h-3" />,
        label: t("SIDE_BAR.ORDERS"),
        path: "/order",
      },
    ];
    return (
        <>
            <Sider className='h-screen' trigger={null}>
                <Row
                    className='h-screen flex-col bg-[#233044]'
                    justify='space-between'>
                    <Col>
                        <div>
                            <img src='/image/logo.png' className='w-full' />
                        </div>
                        <Menu
                            className='bg-[#233044]'
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['1']}
                            mode='inline'
                            theme='dark'>
                            {items.map((menuItem) =>
                                menuItem.children ? (
                                    <SubMenu
                                        key={menuItem.key}
                                        icon={menuItem.icon}
                                        theme='dark'
                                        title={menuItem.label}>
                                        {menuItem.children.map((childItem) => (
                                            <Menu.Item
                                                className='
                                                w-full'
                                                key={childItem.key}>
                                                <Link to={childItem.path}>
                                                    {childItem.label}
                                                </Link>
                                            </Menu.Item>
                                        ))}
                                    </SubMenu>
                                ) : (
                                    <Menu.Item
                                        key={menuItem.key}
                                        icon={menuItem.icon}>
                                        {menuItem.label}
                                    </Menu.Item>
                                )
                            )}
                        </Menu>
                    </Col>
                    <Col>
                        <Menu
                            theme='dark'
                            className='bg-[#233044]'
                            mode='vertical'>
                            <Menu.Item
                                key='logout'
                                danger={true}
                                icon={<LogoutOutlined />}>
                                Log out
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Sider>
        </>
    );
};

export default MenuSider;
