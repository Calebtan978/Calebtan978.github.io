export default function About() {
    return (
        <>
            <div className={"flex flex-col text-md text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>01.</span><span className={"text-2xl whitespace-nowrap slate font-Poppins font-[600]"}>About me</span>
                </div>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    Hello! My name is Caleb and I enjoy creating things that live on the internet and helps out people. My interest in programming grew back in 2017 when I decided to write a blog, lack of good themes on the platform and thinking lot of people will read my blog I decided to make my own templates — turns out customizing blogger templates and creating new from scratch taught me a lot about the whole front end world.
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                Exceptionally experienced Node JS Backend Developer with 4 years of experience
developing secure, subscription-based web applications. Leveraged RESTful services to increase user engagement
and implemented data security measures that increased customer data storage. Successfully designed and
implemented an efficient workflow system which reduced the time to market for web applications.
                </p>
            </div>
        </>
    )
}
