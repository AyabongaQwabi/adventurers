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
                height: 400px;
                width: 400px;
                display: inline-block;
            }
            .post .post-image img{
                max-width: 100%;
            }
            .post .post-image:hover{
                -webkit-filter: grayscale(1);
                filter: grayscale(1);
                transition: filter .4s linear;

            }
            .post .post-user{
                height: 100px;
                width: 400px;
                display: inline-block;
                vertical-align:top;
                margin-top: 10%;
                padding-left: 10%;
                color: #000;
            }
            .post .post-user h1{
                margin-top: 0px;
                margin-bottom: 5px;
            }
            .post .post-user h6{
                margin-left: 1%;
                margin: 0px;
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
                height: 400px;
                width: 400px;
                display: inline-block;
                margin-right:10px;
            }
            .post .post-image img{
                max-width: 49%;
                margin:1px;

            }
            .post .post-image:hover{
                -webkit-filter: grayscale(1);
                filter: grayscale(1);
                transition: filter .4s linear;

            }
            .post .post-user{
                height: 100px;
                width: 400px;
                display: inline-block;
                vertical-align:top;
                margin-top: 10%;
                padding-left: 10%;
                color: #000;
            }
            .post .post-user h1{
                margin-top: 0px;
                margin-bottom: 5px;
            }
            .post .post-user h6{
                margin-left: 1%;
                margin: 0px;
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

