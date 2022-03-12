import React from 'react'
import "./Section2.css"
import {Card,Button} from "react-bootstrap"

function Section2() {
  return (
    <div className='sectionTwo'>
        <h1 className='sectionTwoTitle'>We offer the best products with <br/>the cheapest prices</h1>
        <div className='sectionTwoRedBg'></div>
        <div className='sectionTwoCard'>
        <Card style={{ width: '18rem'  }} className='cardOne'>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }} className='cardTwo'>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }} className='cardOne'>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }} className='cardTwo'>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    </div>
  )
}

export default Section2