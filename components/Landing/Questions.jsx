import {useState} from 'react'

const Questions = () => {
    const [dropdown, setIsDropdown] = useState(false)

    const handleDropdown = () => {
        setIsDropdown(!dropdown)
    }

    return ( 
        <>
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                <button onClick={handleDropdown}>What is Upcoming? </button>

                {dropdown && <div className="faq-dropdown">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quae laborum quas, impedit corrupti excepturi voluptates accusantium quam culpa natus voluptatibus iusto quia perferendis eum, odit vel labore qui est quo ipsam! Unde non explicabo, debitis veniam tenetur natus.
                    </div>}

                <button>How much does Upcoming cost?</button>
                <button>Can I stream on Upcoming? </button>
                <button>Can I get notifications? </button>
            </div>
        </>
    );
}

export default Questions;