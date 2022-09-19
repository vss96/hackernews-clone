import React from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../constants';
import StoryRow from './StoryRow';

type StoryProps = {
  newsType: string;
};

type StoryState = {
  stories: any[];
  pageNo: any;
  storyIds: [];
};

class StoriesPage extends React.Component<StoryProps, StoryState> {

  constructor(props: StoryProps) {
    super(props)
    this.state = { stories: [], pageNo: 0, storyIds: [] };
    this.incrementPage = this.incrementPage.bind(this);
  }

  async loadInitialState() {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/${this.props.newsType}stories.json`
    );
    this.setState({ storyIds: storyIds, stories: [], pageNo: 0 }, () => this.loadNews());
  }

  componentDidMount() {
    this.loadInitialState();
  }

  componentDidUpdate(prevProps: StoryProps) {
    if (prevProps.newsType !== this.props.newsType) {
      this.loadInitialState();
    }
  }

  async loadNews() {
    try {
      const pageNo = this.state.pageNo;
      const storyIds = this.state.storyIds;
      const stories =  await Promise.all(storyIds.slice(30 * pageNo, 30 * (pageNo + 1)).map(this.getStory));
      this.setState({ stories: stories });
    } catch (error) {
      console.log('Error while getting list of stories.');
    }
  }

  async getStory(id: any) {
    try {
      return axios.get(`${BASE_API_URL}/item/${id}.json`);
    } catch (error) {
      console.log('Error while getting a story.');
    }
  }

  incrementPage() {
    console.log("Incrementing");
    this.setState({ pageNo: this.state.pageNo + 1, stories: [] },
      () => this.loadNews());
  }

  render() {
    let count = this.state.pageNo * 30;
    return this.state.stories && (
      <React.Fragment>
        <table>
          <tbody>
            {this.state.stories
              .map(mapping => mapping.data)
              .filter(mapping => mapping != null)
              .map(story => {
                count += 1;
                return (
                  <StoryRow story={story} count={count} />
                );
              })}
          </tbody>
        </table>
        <button onClick={this.incrementPage}> More</button>
        </React.Fragment>
    );
  }
}

export default StoriesPage; 