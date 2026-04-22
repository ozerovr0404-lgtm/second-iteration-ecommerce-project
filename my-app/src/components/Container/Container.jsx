import { useState } from 'react';
import './Container.css';
import './layout/Layout.jsx';
import Layout from './layout/Layout.jsx';

function Container () {

    const [pageType, setPageType] = useState('tv');

    return (
      <Layout 
        pageType={pageType}
        setPageType={setPageType}
      />
    )
};

export default Container;