import Link from 'next/link';
import Header from '../components/header';
import Feed from '../components/feed';

const home = () =>(
    <div>
        <Header title='South African illustrations' subtitle='as seen on facebook' />
        <Feed />
    </div>
);

export default home;