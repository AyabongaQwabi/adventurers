import Link from 'next/link';
import Header from '../components/header';
import Post from '../components/post';

const home = () =>(
    <div>
        <Header title='South African illustrations' subtitle='as seen on facebook' />
        <div className='adventure'>
            <Post 
                image='/static/artwar.jpg' 
                title='Nkululeko Zulu' 
                description="This was just meant to be a hair study in vector to see what I can achieve... I'm on Instagram too"
                username='@artnwar' 
            />

            <Post 
                image='/static/sibbambo.jpg' 
                title='Tumi Sibambo' 
                description="The kid"
                username='@SibamboPotraits' 
            />
          
            <style jsx>{`
                .adventure{
                    margin:0px 200px;
                    font-family: Futura;
                    padding-top: 10px;
                    padding-left: 250px;
                    color:#fff;
                    text-align:left;
                }
                }
            `}</style>
        </div>
    </div>
);

export default home;