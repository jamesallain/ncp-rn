import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  graphql,
  createFragmentContainer
} from 'react-relay';

import PatientName from './PatientName';

const PatientList = createFragmentContainer(
  ({ data }) => (
    <ol>
      {data.map(entry => (
        <li key={ patient.id }>
          <FeedEntry data={patient} />
        </li>
      ))}
    </ol>
  ),
  graphql`
    fragment PatientList on Patient @relay(plural: true) {
      id
      ...PatientName
    }
  `
)

export default PatientList;