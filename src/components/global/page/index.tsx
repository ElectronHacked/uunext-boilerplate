import React, { FC, ReactNode } from 'react';
import MainLayout from 'layouts/main';

interface IPageProps {
  title?: ReactNode;
  children?: ReactNode;
}

const Page: FC<IPageProps> = ({ title, children }) => {
  return <MainLayout title={title}>{children}</MainLayout>;
};

export default Page;
