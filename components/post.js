export const Post = props => {
    const { image, username, title, description  } = props
    return (
        <div className='post'>
            <div className='post-image'>
                <img src={image} />
            </div>
            <div className='post-user'>
                <h4>{title}</h4>
                <p><small>{description}</small></p>
                <h5>{username}</h5>
            </div>
            <style jsx>{`
            .post{
                padding: 20px;
                text-align: left;
                font-family: Futura;
            }
            .post .post-image{
                height: 200px;
                width: 200px;
                display: inline-block;
                -webkit-filter: grayscale(1);
                filter: grayscale(1);
                transform: sclae(1.1);
            }
            .post .post-image img{
                max-width: 100%;
            }
            .post .post-image:hover{
                -webkit-filter: grayscale(0);
                filter: grayscale(0);
                transition: filter .4s linear;

            }
            .post .post-user{
                height: 100px;
                width: 400px;
                display: inline-block;
                vertical-align:top;
                padding-left: 10%;
                color: #000;
            }
            .post .post-user h1{
                margin-top: 0px;
                margin-bottom: 5px;
            }
            .post .post-user h4{
                padding:0px;
                margin:0px;
            }
            .post .post-user h6:before{
                content:'-';
                padding-left:10px;
                padding-right:10px;
            }
        `}</style>
        </div>
    )
}

export const MultiPost = props => {
    const { images, username, title, description  } = props
    return (
        <div className='post'>
            <div className='post-image'>
                {images.map(image => <img src={image} />)}
            </div>
            <div className='post-user'>
                <h4>{title}</h4>
                <p><small>{description}</small></p>
                <h5>{username}</h5>
            </div>
            <style jsx>{`
            .post{
                padding: 20px;
                text-align: left;
                font-family: Futura;
            }
            .post .post-image{
                height: 200px;
                width: 200px;
                display: inline-block;
                margin-right:10px;
                -webkit-filter: grayscale(1);
                filter: grayscale(1);
            }
            .post .post-image img{
                max-width: 49%;
                margin:1px;

            }
            .post .post-image:hover{
                -webkit-filter: grayscale(0);
                filter: grayscale(0);
                transform: sclae(1.1);
                transition: filter .4s linear;

            }
            .post .post-user{
                height: 100px;
                width: 400px;
                display: inline-block;
                vertical-align:top;
                padding-left: 10%;
                color: #000;
            }
            .post .post-user h1{
                margin-top: 0px;
                margin-bottom: 5px;
            }
            .post .post-user h4{
                padding:0px;
                margin:0px;
            }
            .post .post-user h6:before{
                content:'-';
                padding-left:10px;
                padding-right:10px;
            }
        `}</style>
        </div>
    )
}

