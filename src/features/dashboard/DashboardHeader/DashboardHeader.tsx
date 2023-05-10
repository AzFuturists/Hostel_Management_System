import DashboardHeaderComponent from "./DashboardHeaderComponent";

const DashboardHeader = () => {
  const currentDate = new Date().toDateString();

  const args = { currentDate };

  return <DashboardHeaderComponent {...args} />;
};

export default DashboardHeader;
