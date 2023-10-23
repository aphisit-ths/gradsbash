import Link from "next/link";
import { FC } from "react";

type QuestionCard = {
    color?: string;
    text?: string;
    link?: string;
};
const QuestionCard: FC<QuestionCard> = ({
    color = "bg-meblue",
    text = "Hello",
    link = "/",
}) => {
    return (
        <Link
            href={link}
            className={`w-full h-[250px] ${color} rounded-mesm flex justify-center items-center`}
        >
            <h1 className="text-4xl text-mebg">{text}</h1>
        </Link>
    );
};

export default QuestionCard;
