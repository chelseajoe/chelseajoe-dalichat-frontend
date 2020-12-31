import React from 'react';
import { Helmet } from 'react-helmet';
import queryString from 'querystring';

import LoadingIcon from '../../generic/LoadingIcon';
import HeaderImage from '../../layout/HeaderImage';

import Post from '../../posts/Post';
import TabGroup from '../../tabs/TabGroup';

import { generateMetaTitleFromPage } from '../../../constants';
import './Search.scss';

const Search = ({
  user, posts, postResults, userResults, history,
  postsLoading, usersLoading, postSearch, userSearch,
}) => {
  const [activeTab, setActiveTab] = React.useState('Featured Posts');
  const query = queryString.parse(history.location.search.slice(1))?.query || '';

  React.useEffect(() => {
    postSearch({ query });
    userSearch({ query });
  }, [history.location.search]);

  return (
    <div id="search-container">
      <Helmet>
        <title>{generateMetaTitleFromPage('Search')}</title>
      </Helmet>

      <HeaderImage
        backgroundUrl={user?.backgroundUrl}
        className="search-header-image"
      />

      <main id="search-content-container">
        <div className="search-tabgroup-container">
          {userResults.length ? userResults.map((userResult) => (
            <TabGroup
              user={userResult}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              key={userResult._id}
            >
              <div label="Featured Posts">
                {usersLoading ? <LoadingIcon />
                  : userResult.posts.map((postId) => (
                    <Post
                      postContent={posts?.[postId] || {}}
                      className="search-post"
                      key={postId}
                    />
                  ))}
              </div>
            </TabGroup>
          )) : (
            <p className="search-noresults-container">
              No user results found for query &quot;{query}&quot;
            </p>
          )}

          <div>
            {/* eslint-disable-next-line no-nested-ternary */}
            {postsLoading ? <LoadingIcon />
              : (postResults.length ? postResults.map((post) => (
                <Post
                  postContent={post}
                  className="search-post"
                  key={post._id}
                />
              )) : (
                <p className="search-noresults-container">
                  No post results found for query &quot;{query}&quot;
                </p>
              )
              )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;
