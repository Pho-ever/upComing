// import {useState} from 'react'

const Questions = () => {
    // const [dropdown, setIsDropdown] = useState(false)

    // const handleDropdown = (index) => {
    //     setIsDropdown(!dropdown)
    // }

    const FAQ = [
        {heading: 'What is Upcoming', content: ""},
        {heading: 'How much does UpComing cost?', content:""},
        {heading: 'Can I stream on Upcoming?', content:""},
        {heading: 'Can I get notifications?', content:""}
    ]
        
    

    return ( 
        <>
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                    {FAQ.map(item => (<button>
                        {item.heading}
                    </button>))}
                    
                
                {/* <button onClick={handleDropdown}>What is Upcoming? </button>
                {dropdown && <div className="faq-dropdown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quae laborum quas, impedit corrupti excepturi voluptates accusantium quam culpa natus voluptatibus iusto quia perferendis eum, odit vel labore qui est quo ipsam! Unde non explicabo, debitis veniam tenetur natus.
                    </div>}

                <button onClick={handleDropdown}>How much does Upcoming cost?</button>
                {dropdown && <div className="faq-dropdown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quae laborum quas, impedit corrupti excepturi voluptates accusantium quam culpa natus voluptatibus iusto quia perferendis eum, odit vel labore qui est quo ipsam! Unde non explicabo, debitis veniam tenetur natus.
                    </div>}

                <button onClick={handleDropdown}>Can I stream on Upcoming? </button>
                {dropdown && <div className="faq-dropdown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quae laborum quas, impedit corrupti excepturi voluptates accusantium quam culpa natus voluptatibus iusto quia perferendis eum, odit vel labore qui est quo ipsam! Unde non explicabo, debitis veniam tenetur natus.
                    </div>}

                <button onClick={handleDropdown}>Can I get notifications? </button>
                {dropdown && <div className="faq-dropdown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quae laborum quas, impedit corrupti excepturi voluptates accusantium quam culpa natus voluptatibus iusto quia perferendis eum, odit vel labore qui est quo ipsam! Unde non explicabo, debitis veniam tenetur natus.
                    </div>} */}
            </div>
        </>
    );
}

export default Questions;