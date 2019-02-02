import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { GoLinkExternal } from 'react-icons/go'
import { IoIosReturnRight } from 'react-icons/io'
import BlogTemplate from '../../templates/blog'
import './index.scss'
import bannerImage from '../../images/rn_logo_medium.png'
import { Link } from 'gatsby';

export default () => (
    <BlogTemplate
      meta_title="Android Emulator for React Native in Mac, Linux and Windows - The right way to get it working."
      meta_desc="Let’s quickly set up Android Studio’s emulator in a better way this time — without actually installing Android Studio! Open your terminal first to install Java development kit 8. You can install it through command line or by visiting oracle.com and download the JDK after accepting the license agreement."
      meta_keywords="react native android, android app emulator, android studio, right setup, less space, mac installation setup, linux installation setup, windows installation setup, install from cli, commandline"
      bannerImage={bannerImage}
    >
      <article className="blog-content container">
      <div className="original-article-link">
        <OutboundLink href="https://medium.com/@rishii.kumar.chawda/install-android-emulator-for-react-native-app-without-installing-android-studio-727d7734528">
          <p>{'Read this article on Medium.'}</p>
          <GoLinkExternal />
        </OutboundLink>
        <Link to="/articles">
          <IoIosReturnRight style={{ marginRight: 10 }}/>
          <p>{'Back to All articles'}</p>
        </Link>
      </div>
        <div className="blog-title">
        <h4>{'Install Android Emulator for Mac, Linux and Windows without installing Android Studio'}</h4>
        </div>
        <div className="blog-body">
          <p>{'This page will be updated soon. Don\'t worry, you can still read the article on the medium link above the title!'}</p>
        </div>
      </article>
    </BlogTemplate>
);

