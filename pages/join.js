import Link from 'next/link';

const home = () =>(
    <div className='adventure'>
        <div className='join-adventures'> 
            <h1>The Adventurers Code </h1>
        </div>
        <div className='mural'>
            <img src='/static/m.png'/>
        </div>
        <div>
            <p> The adventuters code is an exciting quest into the deep world of code. Where all kinds of magical creatures live
                Some of these creatures are have two hrons like bools and can only be tamed with special potions called conditionals.
                Other creatures are unchangeabled and have long necks other are blue , others have red ears. If you think this is your 
                kind of adventure well then feel free to join us. come and be a part of the magic.
            </p>
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
                transition: padding, background 2s ease-in-out;
                
            }
            .join-adventures{
                margin:auto;
                margin-right:260px;
                width:350px;
                display:inline-block;
                transition: width 1s ease-in-out;
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
            p{
                transition: all 2s linear;
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