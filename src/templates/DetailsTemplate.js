import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledDetailsWrapper = styled.div`
  padding: 50px 0px 0px 100px;
  max-width: 650px;
`;
const StyledHeading = styled(Heading)`
  margin: 40px 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.xl};

  ::first-letter {
    text-transform: uppercase;
  }
`;
const StyledParagraph = styled(Paragraph)`
  margin: 2px;
  font-weight: ${({ theme }) => theme.light};
`;

const StyledContent = styled(Paragraph)`
  padding: 10px 0px 10px 0px;
`;

const StyledArticleLink = styled.a`
  display: block;
  color: black;
  font-weight: ${({ theme }) => theme.bold}
  margin: 5px 0px 30px 0px;
`;

const StyledAvatarWrapper = styled.div`
  position: relative;
`;
const StyledAvatar = styled.img`
  position: absolute;
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  right: 0;
  bottom: 0;
`;

const DetailsTemplate = ({ pageType, title, content, created, twitterName, articleUrl }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledDetailsWrapper>
      <StyledHeading>
        {title}
        {pageType === 'twitters' ? (
          <StyledAvatarWrapper>
            {' '}
            <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
          </StyledAvatarWrapper>
        ) : (
          ''
        )}
      </StyledHeading>
      <StyledParagraph>CREATED: {created}</StyledParagraph>
      <StyledContent>{content}</StyledContent>
      {pageType === 'articles' ? (
        <StyledArticleLink href={articleUrl}> OPEN THIS ARTICLE</StyledArticleLink>
      ) : (
        ''
      )}

      <Link to="/">
        <Button activeColor={pageType}>CLOSE / SAVE</Button>
      </Link>
    </StyledDetailsWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default DetailsTemplate;
