import {MenuProps, Menu} from "antd";
import React, {useState} from "react";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '/page3'),
        getItem('Bill', '/page4'),
        getItem('Alex', '/page5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const MainMenu: React.FC = () => {
    const navigateTo = useNavigate()
    const menuClick = (e: {key: string}) => {
        console.log(e)
        navigateTo('/manage' + e.key);
    }

    const [openKeys, setOpenKeys] = useState([''])
    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
        console.log('openKeys', keys)
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={['/page1']}
            mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            openKeys={openKeys}
        />
    )
}

export default MainMenu;
























