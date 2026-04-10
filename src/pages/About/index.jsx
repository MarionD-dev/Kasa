import Collapse from "../../components/Collapse"

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <Collapse title="Our History" content="Learn about our company's journey and milestones." />
            <Collapse title="Our Team" content="Meet the talented individuals behind our success." />
        </div>
    )
}

export default About