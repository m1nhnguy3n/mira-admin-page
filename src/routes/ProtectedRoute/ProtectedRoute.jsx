import { Button, Col, Drawer, Layout, Row, Switch, Input } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import MenuSider from '../../components/MenuSider';
import MenuSvg from '../../assets/MenuIcon';
import './ProtectedRoute.scss';
import SearchIcon from '../../assets/SearchIcon';
const { Header, Content } = Layout;

const ProtectedRoute = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
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
                className='h-full'>
                <MenuSider />
            </Drawer>
            <MenuSider id='sider_container' />

            <Row className='w-full'>
                <Col span={24} >
                    <Header
                        className='
                            h-[100px] bg-inherit flex w-full'>
                        <Row justify='space-between' className='w-full'>
                            <Col span={8} className='flex items-center'>
                                <Input
                                    className='search-input bg-inherit w-40 text-white'
                                    placeholder='Search topics'
                                    prefix={<SearchIcon />}
                                />
                                <Button
                                    id='show-sidebar-btn'
                                    className='bg-inherit'
                                    onClick={showDrawer}
                                    icon={<MenuSvg />}
                                />
                            </Col>
                            <Col span={8} className='flex justify-end items-center'>
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
