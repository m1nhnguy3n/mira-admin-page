import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import './index.css';
import Routes from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        siderBg: '#233044',
                    },
                    Menu: {
                        darkSubMenuItemBg: '#233044',
                    },
                    Drawer: {
                        paddingLG: '0',
                    },
                },
            }}>
            <I18nextProvider i18n={i18n}>
                <Routes />
            </I18nextProvider>
        </ConfigProvider>
    </React.StrictMode>
);
