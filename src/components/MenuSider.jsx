import { LogoutOutlined } from '@ant-design/icons';
import { Badge, Col, Layout, Menu, Row, Space, Typography } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardSvg from '../assets/DashboardIcon';
import LogoSvg from '../assets/LogoIcon';
import OrderSvg from '../assets/OrderIcon';
import PageSvg from '../assets/PageIcon';
const { Sider } = Layout;

const MenuSider = ({ ...other }) => {
    const { t } = useTranslation();

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState(
        pathname ? pathname : 'dashboard'
    );

    useEffect(() => {
        setActiveItem(pathname);
    }, [pathname]);

    const items = [
        {
            key: '1',
            icon: <DashboardSvg />,
            label: t('SIDE_BAR.DASHBOARD'),
            children: [
                {
                    key: 'analytic',
                    label: 'Analytics',
                },
            ],
        },
        {
            key: 'page',
            icon: <PageSvg />,
            label: t('SIDE_BAR.PAGE'),
            children: [
                {
                    key: 'profile',
                    label: 'Profile',
                },
                {
                    key: 'pricing',
                    label: 'Pricing',
                },
            ],
        },
        {
            key: 'order',
            icon: <OrderSvg className='w-3 h-3' />,
            label: t('SIDE_BAR.ORDERS'),
        },
    ];
    return (
        <>
            <Sider className='h-100lvh w-10' trigger={null} {...other}>
                <Row className='h-screen bg-[#233044] justify-center'>
                    <Col className='self-start'>
                        <Space className='p-5'>
                            <LogoSvg />
                            <Badge text='pro' color='white'>
                                <Typography.Text className='text-[17px]'>
                                    Mira
                                </Typography.Text>
                            </Badge>
                        </Space>
                        <Menu
                            className='bg-[#233044]'
                            // defaultSelectedKeys={activeItem}
                            // defaultOpenKeys={activeItem}
                            selectedKeys={activeItem}
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
                                                onClick={() => {
                                                    navigate(childItem.key),
                                                        setActiveItem(
                                                            childItem.key
                                                        );
                                                }}
                                                className={`pr-5 `}
                                                key={childItem.key}>
                                                {childItem.label}
                                            </Menu.Item>
                                        ))}
                                    </SubMenu>
                                ) : (
                                    <Menu.Item
                                        onClick={() => {
                                            navigate(menuItem.key),
                                                setActiveItem(menuItem.key);
                                            
                                        }}
                                        key={menuItem.key}
                                        icon={menuItem.icon}>
                                        {menuItem.label}
                                    </Menu.Item>
                                )
                            )}
                        </Menu>
                    </Col>
                    <Col className='self-end'>
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
