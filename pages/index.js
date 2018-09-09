import Link from 'next/link';

const home = () =>(
    <div className='adventure'>
        <div className='join-adventures'> 
            <h1>The Adventurers Code </h1>
            <p>Are you ready for a quest ?</p>
            <Link href='/join'>
                <button> Join </button>
            </Link>
        </div>
        <div className='mural'>
            <img src='/static/m.png'/>
        </div>
        <style jsx>{`
            .adventure{
                margin:200px 300px;
                background:  #211041;
                font-family: Tahoma;
                padding: 50px;
                color:#fff;
                text-align:left;
                box-shadow: 1px 1px 1px grey;
                
            }
            .join-adventures{
                margin:auto;
                margin-right:260px;
                width:350px;
                display:inline-block;
            }
            .mural{
                margin:auto;
                text-align: center;
                width:350px;
                display:inline-block;
                filter: saturate(8);
            }
            .mural img{
                max-width:50%;
            }
            button{
                padding: 10px;
                background: #ed3990;
                color: #fff;
                border: 3px solid #ffeb3b00;
                width: 120px;
                border-radius: 5px;
                font-weight: 600;
            }

            @keyframes grad{
                0%{
                   trasnform: scale(1) rotateZ(-1deg);
                }
                100%{
                    transform: scale(1.02) rotateZ(1deg) rotate3d(1, 1, 1, 5deg);
                    
                }
            }
        `}</style>
    </div>
);

export default home;