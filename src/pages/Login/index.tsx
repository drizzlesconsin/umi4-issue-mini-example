import { PageContainer } from '@ant-design/pro-components';

const LoginPage: React.FC = () => {
  return (
    <PageContainer
      ghost
      header={{
        title: `Layout: false; wrappers: ['@/wrappers/auth']`,
      }}
    >
      Login page
    </PageContainer>
  );
};

export default LoginPage;
