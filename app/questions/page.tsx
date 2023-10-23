import Image from "next/image";
import QuestionCard from "@/components/Card/QuestionCard";
import BackButton from "@/components/BackButton";
export default function Questions() {
    return (
        <div className="flex flex-col max-w-screen-sm bg-mebg w-full h-full justify-evenly overflow-hidden px-6">
            <BackButton />
            <div className="flex flex-col justify-center gap-[16px] items-center  ">
                <h1 className="text-3xl text-meblue">มาเจอกันวันงานไหม ?</h1>
                <QuestionCard
                    color="bg-meblue"
                    text="ไปอยู่จ้า 😄"
                ></QuestionCard>
                <QuestionCard
                    color="bg-meyellow"
                    text="ไม่ได้ไปจ้า 😢"
                    link="/congrats"
                ></QuestionCard>
            </div>
        </div>
    );
}
