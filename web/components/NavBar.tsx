import NavBarTarget from "@/components/NavBarTarget";

export default function NavBar({}) {

    return (<div className={"w-fit flex flex-row justify-center items-end gap-0 text-lg py-2 h-full"}>

        <NavBarTarget title={"Home"} href={"/"}/>
        <NavBarTarget title={"Contribute"} href={"/contribute"} border={"x"}/>
        <NavBarTarget title={"About"} href={"/about"}/>

    </div>)
}