import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const AppLayout = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            label: <Link to="/">Home</Link>
          },
          {
            key: '2',
            label: <Link to="/about">About</Link>
          }
        ]}
      />
    </Header>
    <Layout>
      <Sider width="25%" theme="light">
        Sider
      </Sider>
      <Content style={{ padding: '24px' }}>
        <Outlet />
      </Content>
    </Layout>
    <Footer style={{ textAlign: 'center' }}>Super App ©2024</Footer>
  </Layout>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);

export default () => {
  return <RouterProvider router={router} />;
};
