import { getAuth, signOut } from '@firebase/auth';
import {
    Badge,
    Button,
    Col,
    Drawer,
    Input,
    Layout,
    Popover,
    Row,
    Space,
    Switch,
} from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import MenuSvg from '../../assets/MenuIcon';
import MessageIcon from '../../assets/MessageIcon';
import NotificationIcon from '../../assets/NotificationIcon';
import SearchIcon from '../../assets/SearchIcon';
import SettingIcon from '../../assets/SettingIcon';
import MenuSider from '../../components/Menu/MenuSider';
import { app } from '../../config/firebase';
import './ProtectedRoute.scss';
const { Header, Content } = Layout;

const ProtectedRoute = () => {
    const { i18n, t } = useTranslation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const [openPopover, setOpenPopover] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const handleOpenChange = (newOpen) => {
        setOpenPopover(newOpen);
    };

    const onClose = () => {
        setOpen(false);
    };

    const logout = async () => {
        const auth = getAuth(app);
        try {
            await signOut(auth);
            navigate('/login');
            localStorage.removeItem('accessToken');
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    const token = localStorage.getItem('accessToken');

    if (!token) {
        return <Navigate to='login' />;
    }

    //     pathname ? pathname : 'dashboard'
    // );

    return (
        <Layout className='font-sans h-full w-full bg-[#1B2635]'>
            <Drawer
                placement='left'
                onClose={onClose}
                closable={false}
                getContainer={false}
                width={200}
                open={open}
                maskClosable={true}
                className='h-full'
            >
                <MenuSider />
            </Drawer>
            <MenuSider id='sider_container' />

            <Row className='h-full w-full flex'>
                <Col span={24}>
                    <Header
                        id='header-container'
                        className='
                            h-[100px] bg-inherit w-full flex'>
                        <Row className='w-full' justify='space-between'>
                            <Col span={8} className='flex items-center'>
                                <Input
                                    className='search-input bg-inherit w-45 text-white'
                                    placeholder={t('SIDE_BAR.SEARCH_CATEGORY')}
                                    prefix={<SearchIcon />}
                                    variant='filled'
                                />
                                <Button
                                    id='show-sidebar-btn'
                                    className='bg-inherit'
                                    onClick={showDrawer}
                                    icon={<MenuSvg />}
                                />
                            </Col>
                            <Col
                                span={8}
                                className='flex justify-end items-center gap-5'>
                                <Badge count={5} color='blue'>
                                    <Button
                                        className='bg-inherit'
                                        icon={<MessageIcon />}
                                    />
                                </Badge>
                                <Badge count={5} color='blue'>
                                    <Button
                                        className='bg-inherit'
                                        icon={<NotificationIcon />}
                                    />
                                </Badge>
                                <Switch
                                    checkedChildren='EN'
                                    unCheckedChildren='VI'
                                    defaultChecked={
                                        localStorage.getItem('lang') === 'en'
                                            ? true
                                            : false
                                    }
                                    onChange={(e) => {
                                        localStorage.setItem(
                                            'lang',
                                            e ? 'en' : 'vi'
                                        );
                                        i18n.changeLanguage(e ? 'en' : 'vi');
                                    }}
                                />
                                <Popover
                                    content={
                                        <Space
                                            direction='vertical'
                                            className='flex items-center text-white'>
                                            <Link to='/profile'>
                                                {t('SIDE_BAR.PROFILE')}
                                            </Link>
                                            <Button
                                                className='border-0 text-white'
                                                onClick={logout}>
                                                {t('SIDE_BAR.LOG_OUT')}
                                            </Button>
                                        </Space>
                                    }
                                    trigger='click'
                                    open={openPopover}
                                    onOpenChange={handleOpenChange}>
                                    <Button
                                        className='bg-inherit'
                                        icon={<SettingIcon />}
                                    />
                                </Popover>
                            </Col>
                        </Row>
                    </Header>
                </Col>
                <Col span={24} className='p-5'>
                    <Content>
                        <Outlet />
                    </Content>
                </Col>
            </Row>
        </Layout>
    );
};

export default ProtectedRoute;
