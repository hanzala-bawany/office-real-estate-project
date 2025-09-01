import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import style from "./menuBar.module.scss"


const items = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'About' },
    { key: '3', label: 'Contact' },
    { key: '4', label: 'Agents' },
    { key: '5', label: 'Sign in' },
    { key: '5', label: 'Sign up' },

];
const Menubar = () => {

    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div className={style.menuBar} style={{ width: collapsed ? 80 : 256 }} >

            <div className={style.menuIcon} >
                <Button type="primary" onClick={toggleCollapsed}>
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <Menu
            className={style.menu}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                style={{
                    direction: "rtl",    // ✅ submenus right-to-left open honge
                    textAlign: "left",
                }}
            />

        </div>


    );
};
export default Menubar;