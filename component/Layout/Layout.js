import React, { useEffect } from "react";
import SingletonRouter, { useRouter } from "next/router";
import { Layout } from "@douyinfe/semi-ui";
import { IconBell, IconChevronLeft } from "@douyinfe/semi-icons";

import styles from "./Layout.module.css";

export default function AppLayout({ children }) {
  const router = useRouter();
  const { Header, Footer, Content } = Layout;

  const handleGoBack = (e) => {
    router.back();
  };

  return (
    <Layout className={styles.main}>
      <Header className={styles.header}>
        <IconChevronLeft className={styles.icon} onClick={handleGoBack} />
        <div>Header</div>
        <IconBell className={styles.icon} />
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
