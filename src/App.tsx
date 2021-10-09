import {Layout, Menu, Breadcrumb} from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import Registration from "./Registration";

const {Header, Content, Sider} = Layout;

const App = () =>
    <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined/>}>Home</Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding: 0}}/>
            <Content className="ml-3">
                <Breadcrumb className="mt-3">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Form</Breadcrumb.Item>
                </Breadcrumb>
                <div className="p-4">
                    <Registration/>
                </div>
            </Content>
        </Layout>
    </Layout>

export default App
