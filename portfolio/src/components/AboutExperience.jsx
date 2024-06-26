const AboutExperience = ( {item} ) => {
    var expData = item.exp;

    return (
        <div className="exp-container">
            <div className="exp-title">
                <h3>{item.title}</h3>
                <hr />
            </div>
            <div className="exp-list">
                {expData.map((exp) => (
                    <p>{exp}</p>
                ))}
            </div>
        </div>
    )
}

export default AboutExperience;