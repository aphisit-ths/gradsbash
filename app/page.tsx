import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (
        <main className="h-screen w-screen flex justify-center items-center bg-meblue overflow-hidden">
            <div className="flex flex-col max-w-screen-sm bg-meblue w-full h-full justify-end items-center overflow-hidden">
                <Link href={"questions"}>
                    <h1 className="text-[55px] text-mebg">สวัสดี 👋🏻</h1>
                </Link>
                <Image
                    src={"/megrads.png"}
                    alt="this is my pic of grads"
                    width={400}
                    height={488.89}
                ></Image>
            </div>
        </main>
    );
}
