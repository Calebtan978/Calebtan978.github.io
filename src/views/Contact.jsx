export default function Contact() {
    return (
        <div className={"flex flex-col h-full mb-24 items-start md:items-center justify-center max-w-[1000px] w-full"}>
            <span className={"accent font-monospace mb-4 text-lg"}>04. What's Next?</span>
            <h3 className={"slate font-[600] mb-6 text-5xl md:text-6xl"}>Get In Touch</h3>
            <p className={"dark-slate max-w-[600px] md:text-center mb-12"}>
                Hi! I'm currently looking for new opportunities, so feel free to contact.
                Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <a href={"mailto:sadamithu978@gmail.com"} className={"w-full md:w-fit accent hover-btn accent-border border p-4 px-8 text-md font-monospace rounded"}>
                Say Hello
            </a>
        </div>
    )
}
