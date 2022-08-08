import { Navigate, Outlet } from 'umi';

export default () => {
  if (true) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
