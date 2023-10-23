import Link from "next/link";
import { FC } from "react";

interface BackButtonProps {}

const BackButton: FC<BackButtonProps> = () => {
    return (
        <Link href={"/"}>
            <div className="text-center border-[1.5px] text-xl  w-fit border-meblue rounded-melg px-4 py-3">
                กลับไปหน้าแรก
            </div>
        </Link>
    );
};

export default BackButton;
