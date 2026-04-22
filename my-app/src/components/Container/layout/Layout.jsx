import './Layout.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';

function Layout ({ pageType, setPageType }) {
    return (
      <>
        <Header
          pageType={pageType}
          setPageType={setPageType}
        />
        
        <Content pageType={pageType} />
        
        <Footer />
      </>
    )
};

export default Layout;