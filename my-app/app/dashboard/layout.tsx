import Sidebar from "../components/dashboard/sidebar/sidebar";
import Navbar from "../components/dashboard/navbar/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <Navbar />
      {children}
      <h1>Test</h1>
    </>
  );
}
