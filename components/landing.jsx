import Typewriter from 'typewriter-effect'

const Landing = () => {
    return (
        <>
            <div className="landing-info">
                <h2> Get updates on your favourite
                    <Typewriter
                        wrapperClassName="Typewriter__wrapper"
                        options={{
                            strings: ['Actions', 'Anime', 'Romance', 'Sci-fi'],
                            autoStart: true,
                            loop: true,
                            delay: 40,
                        }}
                    />

                </h2>
                <input placeholder="Email Address" type="email" />
                <button type="button">Get started</button>
            </div>
        </>
    );
}

export default Landing;