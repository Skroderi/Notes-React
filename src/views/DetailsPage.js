import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    const { pageType } = this.state;

    const note = {
      id: 1,
      title: 'Hello World',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi `,
      articleUrl: 'https://youtube.com/',
      twitterName: 'arsenal',
      created: '1 day',
    };
    return (
      <DetailsTemplate
        pageType={pageType}
        id={note.id}
        title={note.title}
        content={note.content}
        created={note.created}
        articleUrl={note.articleUrl}
        twitterName={note.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
