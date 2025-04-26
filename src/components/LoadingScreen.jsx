import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {
    
    const [text, setText] = useState("");
    const fullText = "<Hi, 你好/>";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index ++;

            if (index > fullText.length){
                clearInterval(interval)
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);
        
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-[#33290D] text-yellow-50 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>
        </div>
    );
}