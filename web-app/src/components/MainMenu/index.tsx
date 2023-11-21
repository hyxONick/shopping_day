import {MenuProps, Menu} from "antd";
import React, {useState} from "react";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {useNavigate, useLocation} from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: "1",
        key: "/page1",
        icon: <PieChartOutlined />
    },
    {
        label: "2",
        key: "/page2",
        icon: <DesktopOutlined />
    },
    {
        label: "3",
        key: "/page3",
        icon: <UserOutlined />,
        children: [
            {label: '3-1', key: '/page3/1'},
            {label: '3-2', key: '/page3/2'},
            {label: '3-3', key: '/page3/3'}
        ]
    },
    {
        label: "4",
        key: "/page4",
        icon: <TeamOutlined />,
        children: [
            {label: '4-1', key: '/page4/1'},
            {label: '4-2', key: '/page4/2'},
        ]
    },
    {
        label: "5",
        key: "/page5",
        icon: <FileOutlined />
    },
]

const MainMenu: React.FC = () => {
    const navigateTo = useNavigate();
    const manageRoute = useLocation().pathname.split('manage')[1]; // manage route
    const menuClick = (e: {key: string}) => {
        console.log(e)
        navigateTo('/manage' + e.key);
    }

    let firstOpenKey: string = '';
    items.forEach((item) => {
        if (item!['children'] && item!['children'].length && item!['children'].find((k:{key:string}) =>{ return  k.key === manageRoute})) {
            firstOpenKey = item!.key as string;
        }
    })

    const [openKeys, setOpenKeys] = useState([firstOpenKey])
    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
        console.log('openKeys', keys)
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[manageRoute]}
            mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            openKeys={openKeys}
        />
    )
}

export default MainMenu;
























