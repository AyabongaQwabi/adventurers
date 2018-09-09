const header = props => {
    const { title, subtitle } = props
    return (
        <div className='header'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <style jsx>{`
            .header{
                padding:20px 100px;
                text-align: center;
                font-family: Futura;
            }
        `}</style>
        </div>
    )
}

export default header;