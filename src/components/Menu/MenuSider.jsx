import { Avatar, Badge, Col, Layout, Menu, Row, Space, Typography } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardSvg from '../../assets/DashboardIcon';
import OrderSvg from '../../assets/OrderIcon';
import PageSvg from '../../assets/PageIcon';
import AvatarImg from '../../assets/avatar-1.jpg';
import Logo from '../../assets/logo.png';
import './MenuSider.scss';
const { Sider } = Layout;
const { Text } = Typography;

const MenuSider = ({ ...other }) => {
    const { t } = useTranslation();

    const { pathname } = useLocation();
    const key = pathname.split('/')[1];
    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState(key ? key : '');

    useEffect(() => {
        setActiveItem(key);
    }, [key]);

    const items = [
        {
            key: '1',
            icon: <DashboardSvg />,
            label: t('SIDE_BAR.DASHBOARD'),
            children: [
                {
                    key: '',
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
                    label: t('SIDE_BAR.PROFILE'),
                },
                {
                    key: 'pricing',
                    label: t('SIDE_BAR.PRICING'),
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
            <Sider className='h-full w-10' trigger={null} {...other}>
                <Row className='h-screen  bg-[#233044] justify-items-center top-0 bottom-0'>
                    <Col span={24} className=''>
                        <Space className='p-5'>
                            <img src={Logo} alt='' />
                        </Space>
                        <Menu
                            className='bg-[#233044] '
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
                                                className={`mr-5 ${
                                                    activeItem === childItem.key
                                                        ? 'ant-menu-item-selected'
                                                        : ''
                                                }`}
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
                                            console.log(menuItem.key);
                                        }}
                                        key={menuItem.key}
                                        icon={menuItem.icon}>
                                        {menuItem.label}
                                    </Menu.Item>
                                )
                            )}
                        </Menu>
                    </Col>
                    <Col span={24} className='flex items-end'>
                        <Space className='px-3 py-3' wrap>
                            <Badge
                                className=''
                                offset={[-7, 32]}
                                size='large'
                                color='green'
                                dot>
                                <Avatar src={AvatarImg} size='large' />
                            </Badge>
                            <Space wrap direction='vertical' size={'small'}>
                                <Text className='text-white text-xs'>
                                    Lucy Lavender
                                </Text>
                                <Text className='text-white text-xs'>
                                    {t('SIDE_BAR.UX_DESIGNER')}
                                </Text>
                            </Space>
                        </Space>
                    </Col>
                </Row>
            </Sider>
        </>
    );
};

export default MenuSider;
