import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect }from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../Components/Swipe';

import * as actions from '../Actions'

class DeckScreen extends Component {
  constructor(props){
    super(props);
  }
  renderCard(job){
    return(
      <Card title={job.title}>
      <View styles={styles.detailWrapper}>
        <Text>{job.company}</Text>
        <Text>{job.created_at}</Text>
      </View>
      <Text>
        {job.description.replace(/<b>/g, '').replace(/<\/b>/g, '')}
      </Text>
    </Card>
    )
  }

  renderNoMoreCards(){
    return(
      <Card title="NO more JObs"></Card>
    )
  }

  render() {
    console.log(this.props.jobs)
    return (
      <View>
        <Swipe 
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    )
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

function mapStateToProps({ jobs }){
  return { jobs: jobs.results }
}

export default connect(mapStateToProps, actions)(DeckScreen)