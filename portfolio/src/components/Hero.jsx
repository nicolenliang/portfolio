const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-name">
                <h3>Hi! I'm</h3>
                <h1>Nicole Liang</h1>
            </div>
            <hr className="under-name"></hr>
            <div className="hero-roles">
                <p><a href="#design">designer</a></p>
                &nbsp;&nbsp; <p>and</p> &nbsp;&nbsp;
                <p><a href="/code">software engineer</a></p>
            </div>
            <hr />
            <h4>driven by</h4>
            <p className="desc">human connection, intentional tech, & empathetic work</p>
            <p className="quip">(and energy drinks!)</p>
        </div>
    )
}

export default Hero;