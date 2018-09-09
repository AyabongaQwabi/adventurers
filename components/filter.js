// ./pages/_document.js
import { Container, Row, Col } from 'reactstrap';

const getTags = () => ['mural','black-and-white','retro'];
const getUsers = () => ['@wayway','@chris','@artnwar'];

const filter = props => {
    const { onFilter } = props
    return (
        <div className='filter'>
            <Row>
                <Col md='2'><p>Filter by :</p></Col>
                <Col md='10'>
                    {getTags().map(tag => {
                        return(
                            <a href='#' key={tag} onClick={onFilter(tag)}> {tag} </a>
                        )
                    })}
                </Col>
            </Row>
        <style jsx>{`@import '/static/css/filter.css'`}</style>
        </div>
    )
}

export default filter;
