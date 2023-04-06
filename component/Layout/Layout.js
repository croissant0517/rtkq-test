import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useModal from "@douyinfe/semi-ui/lib/es/modal/useModal";
import { Layout } from "@douyinfe/semi-ui";
import { IconBell, IconChevronLeft } from "@douyinfe/semi-icons";

import styles from "./Layout.module.css";

export default function AppLayout({ children }) {
  const router = useRouter();
  const { Header, Footer, Content } = Layout;

  const handleHistoryBack = (e) => {
    history.go(1);
    console.log("Go");
  };

  const handleGoBack = (e) => {
    router.back();
  };

  useEffect(() => {
    window.addEventListener("popstate", handleHistoryBack);
    return () => window.removeEventListener("popstate", handleHistoryBack);
  });

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
