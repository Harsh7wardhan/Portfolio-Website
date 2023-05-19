import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a full stack developer from India. I have experience working as a Machine Learning Intern at TeknoGeeks. Currently, I am working as a Full Stack developer at Virtusa. Rated 3* on Codechef, ranked 51,000 on LeetCode. I am proficient in several programming languages, including C++, Python, and Java, and have experience with technologies and frameworks such as HTML, CSS, JavaScript, WordPress, PHP, Flask, JQuery, Node JS, React JS, AJAX, and databases such as MySQL, Oracle, and MongoDB. I have also worked with deployment and version control tools such as Heroku, Netlify, Git, and Github.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Machine Learning</li>
                                    <li>Deep Learning</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>DBMS</li>
                                    <li>C++/Python/Java</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage