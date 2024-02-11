import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div>
        <MainNavigation />
      </div>
      {children}
    </div>
  );
};

export default Layout;
