import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
  //   Button
} from 'reactstrap';
import './LoginForm.css';

function ProfileCard(props) {
  return (
    <div className='cardBody'>
      <Card>
        {/* <CardImg
          top
          width='100%'
          src='/assets/318x180.svg'
          alt='Card image cap'
        /> */}
        <CardBody>
          <CardTitle className='profileTitle'>{props.profileTitle} </CardTitle>
          <CardSubtitle>Name: {props.profileTitle}</CardSubtitle>
          <CardText>Guid Specialty: {props.guide_specialty}</CardText>
          <CardText>Description: {props.tagline}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  );
}

export default ProfileCard;
