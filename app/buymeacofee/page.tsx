import Image from "next/image";
import QuestionCard from "@/components/Card/QuestionCard";
import BackButton from "@/components/BackButton";
export default function Questions() {
    return (
        <div className="flex flex-col max-w-screen-sm bg-meorange w-full h-full justify-evenly overflow-hidden px-6">
            <BackButton />
            <div className="flex flex-col justify-center gap-[16px] items-center">
                <Image
                    src={"/qr.png"}
                    alt="Oat QR"
                    width={344}
                    height={463}
                ></Image>
                <div className="w-full bg-mebg flex flex-col rounded-melg">
                    <h1>9834441622</h1>
                    <h1>กรุงไทย</h1>
                </div>
            </div>
        </div>
    );
}
