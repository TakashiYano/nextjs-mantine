import type { CustomNextPage } from "next";
import { DashboardLayout } from "src/layout/DashboardLayout";

const Settings: CustomNextPage = () => {
  return <div>Settings</div>;
};

Settings.getLayout = DashboardLayout;

export default Settings;
