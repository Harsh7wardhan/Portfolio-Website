import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import musicrecomm from '../../Assets/music 2.png'
import restaurant from '../../Assets/rest reviews.png'
import disease from '../../Assets/multi disease pred.png'
import ecomm from '../../Assets/Ecommerce-Website-Promotion_Final.png'
import blog from '../../Assets/blog.jpg'
import tracker from '../../Assets/tracker.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={musicrecomm}
                isBlog={false}
                title="Music Recommender System"
                description="CNN-based system recommending songs based on user s choice. Developed this project with technologies like Computer Vision, CNN, Keras .The basic idea of this project is to recommend music using computer vision through a convolutional neural network. The network is first trained as a classifier with the labels being the 8 different genres of songs from the dataset."
                ghLink="https://github.com/Harsh7wardhan/Music-Recommendation-System"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={restaurant}
                isBlog={false}
                title="Restaurant Reviews"
                description="Automate detection of different sentiments from textual comments and feedback, A machine learning model is created to understand the sentiments of the restaurant reviews. The problem is that the review is in a textual form and the model should understand the sentiment of the review and automate a result."
                ghLink="https://github.com/Harsh7wardhan/Restaurant-Reviews"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={disease}
                isBlog={false}
                title="Multi Disease Predictor"
                description="This webapp was developed using Flask Web Framework and was deployed on Heroku server. The models used to predict the diseases were trained on large Datasets. All the links for datasets and the python notebooks used for model creation are mentioned at this github link."
                ghLink="https://github.com/Harsh7wardhan/Multi-Disease-Predictor"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={ecomm}
                isBlog={false}
                title="E Commerce WebApp"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={blog}
                isBlog={false}
                title="Lets Blog"
                description="Designed and developed an interactive blogging website with CRUD functionalities using HTML, CSS, Bootstrap, Flask, and JavaScript.
                Implemented a user-friendly interface for reading and writing blogs while securely storing data in a database.
                Demonstrated proficiency in back-end development by leveraging Flask to build robust server-side functionality and enable seamless blog management."
                ghLink="https://github.com/Harsh7wardhan/blog"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={tracker}
                isBlog={false}
                title="Amazon Price Tracker"
                description="This piece of code will send u mail to your specified id automatically when the price of your selected product drops below a specified value!"
                ghLink="https://github.com/Harsh7wardhan/Automated-amazon-price-tracker"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist
