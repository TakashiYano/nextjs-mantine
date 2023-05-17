import type { CustomNextPage } from "next";
import { DashboardLayout } from "src/layout/DashboardLayout";

const Index: CustomNextPage = () => {
  return <div>Index</div>;
};

Index.getLayout = DashboardLayout;

export default Index;
