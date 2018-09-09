
import { Post, MultiPost } from './post';
const retroImages = ['/static/images/m1.jpg','/static/images/m2.jpg','/static/images/m3.jpg','/static/images/m4.jpg']

const feed = props => {
    const {posts} = props;
    console.log(props)
    return (
        <div className='feed'>
            {
                posts.map( post => {
                    if(post.type === 'single'){
                        return <Post {...post} />
                    }
                    else{
                        return <MultiPost {...post} />
                    }
                    
                })
            }
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