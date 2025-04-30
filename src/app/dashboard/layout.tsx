import { JSX } from 'react';

function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <h2>DashboardLayout</h2>
      {children}
    </div>
  );
}

export default DashboardLayout;
