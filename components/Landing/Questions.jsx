import {useState} from 'react'

const Questions = () => {
    const [dropdownIndex, setIsDropdownIndex] = useState(-1)

    const handleDropdown = (index) => {
        const activeIndex = dropdownIndex === index ? -1 : index
        setIsDropdownIndex(activeIndex)
    }

    const FAQ = [
        {heading: 'What is Upcoming', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quae laborum quas, impedit corrupti excepturi voluptates accusantium quam culpa natus voluptatibus iusto quia perferendis eum, odit vel labore qui est quo ipsam! Unde non explicabo, debitis veniam tenetur natus."},
        {heading: 'How much does UpComing cost?', content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quae laborum quas, impedit corrupti excepturi voluptates accusantium quam culpa natus voluptatibus iusto quia perferendis eum, odit vel labore qui est quo ipsam! Unde non explicabo, debitis veniam tenetur natus."},
        {heading: 'Can I stream on Upcoming?', content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quae laborum quas, impedit corrupti excepturi voluptates accusantium quam culpa natus voluptatibus iusto quia perferendis eum, odit vel labore qui est quo ipsam! Unde non explicabo, debitis veniam tenetur natus."},
        {heading: 'Can I get notifications?', content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quis quae laborum quas, impedit corrupti excepturi voluptates accusantium quam culpa natus voluptatibus iusto quia perferendis eum, odit vel labore qui est quo ipsam! Unde non explicabo, debitis veniam tenetur natus."}
    ]
        
    

    return ( 
        <>
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                    {FAQ.map((item, index) => { 
                        return (
                            < >

                        <button onClick={() => handleDropdown(index)}>
                            {item.heading}
                        </button>

                        {dropdownIndex === index  && 
                        <div className="faq-dropdown">
                            {item.content}
                            </div>}
                    
                        </>
                        )
                    })}
            </div>
            
        </>
    );
}

export default Questions;