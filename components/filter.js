// ./pages/_document.js
import { Container, Row, Col } from 'reactstrap';

const getTags = () => ['mural','black-and-white','retro', 'all'];
const getUsers = () => ['@wayway','@chris','@artnwar'];
const retroImages = ['/static/images/m1.jpg','/static/images/m2.jpg','/static/images/m3.jpg','/static/images/m4.jpg']
const filter = props => {
    const { onFilter } = props
    return (
        <div className='filter'>
            <Row>
                <Col md='6'><p></p></Col>
                <Col md='6'>
                    {getTags().map(tag => {
                        return(
                            <a href='#' key={tag} onClick={onFilter(tag)} className='tag'> {tag} </a>
                        )
                    })}
                </Col>
            </Row>
        <style jsx>{`@import '/static/css/filter.css'`}</style>
        </div>
    )
}

export default filter;
