import { Col, Layout, Row, Switch, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import MenuSider from '../../components/MenuSider';
import './ProtectedRoute.scss';
const { Header, Content } = Layout;

const ProtectedRoute = () => {
    const { i18n } = useTranslation();
    //     pathname ? pathname : 'dashboard'
    // );

    return (
        <Layout className=' font-sans h-screen w-full bg-[#1B2635]'>
            {/* <Drawer
                placement='left'
                open={true}
                closable={false}
                width={200}
                className='h-screen'></Drawer> */}
            <MenuSider />
            <Row className='flex flex-col w-full'>
                <Col>
                    <Header
                        className='
                            h-[100px] w-full bg-inherit'>
                        <Row className='flex flex-row' justify='space-between'>
                            <Col>
                                <Typography.Title
                                    level={1}
                                    className=' font-extrabold'>
                                    Hello Abbas
                                </Typography.Title>
                                <Typography>
                                    Lets navigate the realms of data control
                                </Typography>
                            </Col>
                            <Col>
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
                <Col className='p-5'>
                    <Content>
                        <Outlet />
                    </Content>
                </Col>
            </Row>
        </Layout>
    );
};

export default ProtectedRoute;
