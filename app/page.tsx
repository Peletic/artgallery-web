import Image from "next/image";

export default function Home() {
    return (
        <div
            className="font-sans ">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className={"flex flex-row gap-4 text-4xl font-bold"}>
                    <a>Fusion Academy</a>
                    <a>Student Art Gallery</a>
                </h1>
            </main>
            <footer>
            </footer>
        </div>
    );
}
