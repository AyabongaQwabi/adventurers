
import { Post, MultiPost } from './post';
const retroImages = ['/static/m1.jpg','/static/m2.jpg','/static/m3.jpg','/static/m4.jpg']

const feed = props => {

    return (
        <div className='feed'>
            <Post 
                image='/static/artwar.jpg' 
                title='Nkululeko Zulu' 
                description="This was just meant to be a hair study in vector to see what I can achieve... I'm on Instagram too"
                username='@artnwar' 
            />

            <Post 
                image='/static/chris.jpg' 
                title='Christopher Junior Masuabi' 
                description="Christopher the chuckle bberg  #ChrisDesign"
                username='@chris' 
            />
          
            <MultiPost 
                images={retroImages}
                title='Ntsako Terence Maluleke' 
                description="Limited Edition WAY WAY Iconic Collection prints"
                username='@wayway_sa' 
            />

            <style jsx>{`
                .feed{
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
    )
};

export default feed;