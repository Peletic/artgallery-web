import NavBarTarget from "@/components/NavBarTarget";

export default function NavBar({}) {

    return (<div className={"w-full flex flex-row justify-end items-end gap-0 text-lg py-2"}>

        <NavBarTarget title={"Home"} href={"/"}/>
        <NavBarTarget title={"Contribute"} href={"/contribute"} border={"x"}/>
        <NavBarTarget title={"About"} href={"/about"}/>

    </div>)
}