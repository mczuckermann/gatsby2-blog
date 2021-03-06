import React from 'react';
import '../components/Header/header.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import './layout.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query LayoutTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className="pageContainer">
      <div>
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <main className="contentWrapper">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
