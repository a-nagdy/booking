import "../../globals.css";
import DashSidebar from "../dashboard/components/sidebar/DashSidebar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function OrderLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex items center">
          <DashSidebar />
          {children}
        </main>
      </body>
    </html>
  );
}