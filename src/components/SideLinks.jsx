export default function SideLinks() {
    return (
        <>
            <ul className={"hidden xl:flex flex-col fixed bottom-0 left-0 items-center px-14 slate after-line text-xl"}>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <li className={"py-2"}><a href={"https://github.com/SadaMithu"} target={"_blank"} className={"hover-accent hover-displace fab fa-github"} rel="noreferrer" /></li>
            </ul>
            <div className={"slate hidden xl:flex flex-col fixed bottom-0 right-0 items-center px-14 after-line w-fit"}>
                <a href={"mailto:sadamithu978@gmail.com"} className={"vertical-text text-sm hover-accent pb-4 hover-displace cursor-pointer font-monospace opacity-60 font-medium tracking-widest"}>sadamithu978@gmail.com</a>
            </div>
        </>
    )
}
