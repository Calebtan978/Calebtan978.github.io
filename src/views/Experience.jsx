import {useState} from "react";

export default function Experience() {

    const [work, setWork] = useState({
        "Node JS Backend Developer": {
            position: "Backend Wizards",
            duration: "September 2015 - May 2019",
            content: [
                "Designed and implemented a scalable, high-performance Node.js API that improved the overall \
            speed and reliability of the company's web application by 25%.",
                "Implemented secure authentication and authorization solutions, ensuring the protection of sensitive \
                customer data and reducing the risk of security breaches by 40%.",
                "Improved overall code quality and efficiency through regular code reviews and collaboration with other \
                developers, resulting in a 25% decrease in bugs and support tickets"
            ]
        },
        "Junior Web Developer (Node JS)": {
            position: "ByteCrafters",
            duration: "March 2020 - March 2022",
            content: [
                "Improved system scalability and reliability by designing and implementing optimized \
            server-side code for performance, resulting in a 30% increase in traffic capacity",
                "Built and maintained the backend of a modern web application, ensuring its seamless operation \
                and high availability",
                "Became a subject matter expert in a specific area of the application, leading the development of \
                new features and contributing to the company's long-term strategic vision"
            ]
        },
        "Junior Backend Developer (Node JS)": {
            position: "Backend Wizards",
            duration: "March 2022 - Present",
            content: [
                "Led the development of a MongoDB database system, streamlining data management and increasing data \
                processing speed by 50%",
                "Built reusable code libraries and optimized existing codebases, reducing development time for new \
                projects by 30%",
                "Collaborated with cross-functional teams to integrate third-party APIs and platforms, resulting in \
                a seamless user experience and increased customer satisfaction by 20%"
            ]
        }
    })

    const [certifications, setCertifications] = useState({
        "Automating Real-World Tasks with Python": {
            url: "https://coursera.org/share/3d778b5a6dd8449da384fdd30f99a296",
            provider: "Google & Coursera",
            font: "google"
        },
        "From Data to Insights with Google Cloud": {
            url: "https://www.coursera.org/account/accomplishments/specialization/LHTMWADX74T6",
            provider: "Google & Coursera",
            font: "google"
        },
        "Data Analysis with Python": {
            url: "https://www.freecodecamp.org/certification/ishwarjagdale/data-analysis-with-python-v7",
            provider: "FreeCodeCamp",
            font: "free-code-camp"
        },
        "Scientific Computing with Python": {
            url: "https://www.freecodecamp.org/certification/ishwarjagdale/scientific-computing-with-python-v7",
            provider: "FreeCodeCamp",
            font: "free-code-camp"
        },
        "JavaScript Algorithms and Data Structures": {
            url: "https://www.freecodecamp.org/certification/ishwarjagdale/javascript-algorithms-and-data-structures",
            provider: "FreeCodeCamp",
            font: "free-code-camp"
        },
        "Responsive Web Design": {
            url: "https://www.freecodecamp.org/certification/ishwarjagdale/responsive-web-design",
            provider: "FreeCodeCamp",
            font: "free-code-camp"
        }
    })

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className={"flex flex-col text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>02.</span><span className={"text-[22px] whitespace-nowrap slate font-Poppins font-[600]"}>Experience & Achievements</span>
                </div>
                <p className={"dark-slate w-full mb-2 leading-7"}>
                    As in 2022, I have almost 4 years of Node.js backend development.
                </p>
                <div className={"flex flex-col md:flex-row w-full mt-12"}>
                    <ul className={"flex md:flex-col text-sm slate-alt overflow-x-scroll font-monospace mr-6 work-list mb-8 md:mb-0"}>
                        {
                            Object.keys(work).map((k, i) => {
                                return <li onClick={() => setActiveTab(i)} className={`p-3 px-6 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 ${activeTab === i ? "active-item": ""}`}>{k}</li>
                            })
                        }
                    </ul>
                    <div className={"p-2"}>
                        {
                            Object.keys(work).map((k, i) => {
                                return <div className={`${activeTab === i ? "" : "hidden"}`}>
                                    <div className={`font-Poppins text-xl mb-1 font-[500]`}>
                                        <span className={"slate mr-2"}>{work[k].position}</span>
                                    </div>
                                    <span className={"slate text-sm font-monospace"}>{work[k].duration}</span>
                                    <ul className={"flex flex-col bullet-list mt-4 max-w-[540px] slate-alt leading-6 text-sm"}>
                                        {
                                            Object.values(work[k].content).map((v) => <li className={"mb-2"}>{v}</li>)
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
