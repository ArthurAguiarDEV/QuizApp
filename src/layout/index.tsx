import FormHeader from "../components/FormHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }): LayoutProps => {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-[15px] bg-[#191919]">
      <div className="w-[670px] bg-[#bdbaba] rounded-[10px] pb-5">
        <FormHeader />
        {children}
      </div>
    </div>
  );
};

export default Layout;
