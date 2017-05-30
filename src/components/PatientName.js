import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  graphql,
  createFragmentContainer
} from 'react-relay';

const ListDetails = createFragmentContainer(
  ({ data }) => (
    <div>
      Name: {data.patient.name.text} 
    </div>
  ),
  graphql`    
    fragment PatientName on Patient {
      name{
        text    
      }
    }
  `
)


export default ListDetails;