import { Route, Routes } from 'react-router-dom';
import { pageRoutes } from './constants';
import DefaultLayout from '../layouts/DefaultLayout';

const PageRoutes = () => {
  const renderPageRoutes = pageRoutes.map(
    ({ path, title, element, layout }) => {
      const Page = element;
      const Layout = layout || DefaultLayout;
      return (
        <Route
          key={title}
          path={path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      );
    }
  );
  return <Routes>{renderPageRoutes}</Routes>;
};

export default PageRoutes;
