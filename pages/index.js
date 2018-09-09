
import Header from '../components/header';
import Filter from '../components/filter';
import Feed from '../components/feed';

const setFilter = (item) => () =>{

}

const home = () =>(
    <div>
        <Header title='South African illustrations' subtitle='as seen on facebook' />
        <Filter onFilter={setFilter} />
        <Feed />
        <style jsx>{`@import '/static/css/bootstrap/bootstrap.min.css'`}</style>
    </div>
);

export default home;