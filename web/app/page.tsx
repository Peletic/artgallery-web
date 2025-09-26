import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
    return (
        <div
            className="">
            <main className="flex flex-col gap-[12px] row-start-2 items-center sm:items-start px-4 py-4">
                <NavBar/>
                <h1 className={"flex flex-row gap-6 text-4xl w-full pb-8 pt-12 self-center justify-start px-12 border-y-[0.5px] border-white/10"}>
                    <a>FUSION ACADEMY</a>
                    <a>STUDENT ART GALLERY</a>
                </h1>
            </main>
            <footer>
            </footer>
        </div>
    );
}
