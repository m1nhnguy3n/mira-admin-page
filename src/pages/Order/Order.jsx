import { DownSquareFilled, EyeFilled, PlusOutlined } from '@ant-design/icons';
import {
    Breadcrumb,
    Button,
    Col,
    Divider,
    Row,
    Space,
    Table,
    Tag,
    Typography,
} from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        key: '1',
        id: '#000253',
        date: '2023-01-02',
        total: '$32,00',
        payment: 'Visa',
        status: 'Shipped',
        product: 'Salt & Pepper Grinder	',
    },
    {
        key: '2',
        id: '#000256',
        date: '2023-01-08',
        total: '$45,00',
        payment: 'Visa',
        status: 'Processing',
        product: 'Glass Teapot',
    },
    {
        key: '3',
        id: '#000259',
        date: '2023-01-16',
        total: '$25,00',
        payment: 'Visa',
        status: 'Cancelled',
        product: 'Hip Flash',
    },
    {
        key: '4',
        id: '#000261',
        date: '2023-01-22',
        total: '$65,00',
        payment: 'Visa',
        status: 'Shipped',
        product: 'Womens Watch',
    },
    {
        key: '5',
        id: '#000254',
        date: '2023-01-04',
        total: '$130,00',
        payment: 'PayPal',
        status: 'Shipped',
        product: 'Backpack',
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
        );
    },
};
const Order = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [selectionType] = useState('checkbox');

    const baseColumns = [
        {
            title: t('ORDER.ORDERID'),
            dataIndex: 'id',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        {
            title: t('ORDER.PRODUCT'),
            dataIndex: 'product',
            responsive: ['xs', 'md', 'lg', 'xl'],
        },
        {
            title: t('ORDER.DATE'),
            dataIndex: 'date',
            responsive: ['md', 'lg', 'xl'],
        },

        {
            title: t('ORDER.TOTAL'),
            dataIndex: 'total',
            responsive: ['lg', 'xl'],
        },
        {
            title: t('ORDER.STATUS'),
            dataIndex: 'status',
            responsive: ['xl'],
            render: (status) => {
                let color;
                switch (status) {
                    case 'Shipped':
                        color = 'green';
                        break;
                    case 'Processing':
                        color = 'orange';
                        break;
                    case 'Cancelled':
                        color = 'red';
                        break;
                }
                return (
                    <Tag
                        color={color}
                        key={status}
                        style={{
                            borderStyle: 'solid',
                            borderColor: 'dark' + color,
                            borderWidth: '3px',
                        }}>
                        {status.toUpperCase()}
                    </Tag>
                );
            },
        },
        {
            title: t('ORDER.PAYMENT_METHOD'),
            dataIndex: 'payment',
            responsive: ['sm'],
        },
        {
            title: t('ORDER.ACTIONS'),
            dataIndex: 'actions',
            responsive: ['sm'],
            render: () => (
                <Space size='middle'>
                    <Button
                        type='text'
                        icon={<EyeFilled style={{ color: 'white' }} />}
                    />
                    <Button
                        type='text'
                        icon={<DownSquareFilled style={{ color: 'white' }} />}
                    />
                </Space>
            ),
        },
    ];

    return (
        <div className='h-screen lg:h-full'>
            <Row justify='space-between' align='middle' className='h-max'>
                <Col span={24} md={12}>
                    <Typography.Title level={2} style={{ color: 'white' }}>
                        {t('ORDER.ORDER')}
                    </Typography.Title>
                </Col>

                <Col span={24} md={12} style={{ textAlign: 'right' }}>
                    <Button type='primary' icon={<PlusOutlined />}>
                        {t('ORDER.ORDER1')}
                    </Button>
                </Col>
            </Row>
            <Breadcrumb className='my-4 text-[#376FD0] cursor-pointer'>
                <Breadcrumb.Item
                    onClick={() => {
                        navigate('/analytic');
                    }}>
                    {t('SIDE_BAR.DASHBOARD')}
                </Breadcrumb.Item>
                <Breadcrumb.Item
                    onClick={() => {
                        navigate('/');
                    }}>
                    {t('SIDE_BAR.PAGE')}
                </Breadcrumb.Item>
                <Breadcrumb.Item
                    className='text-white'
                    onClick={() => {
                        navigate('/order');
                    }}>
                    {t('SIDE_BAR.ORDERS')}
                </Breadcrumb.Item>
            </Breadcrumb>
            <Divider className='bg-white' />
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                title={() => (
                    <span
                        style={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: '20px',
                        }}>
                        {t('ORDER.ORDER')}
                    </span>
                )}
                columns={baseColumns}
                dataSource={data}
                className='whiteTextTable'
            />
        </div>
    );
};
export default Order;
