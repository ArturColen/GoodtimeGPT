import { KeyboardEvent, useEffect, useRef, useState } from "react";
import IconSend from "./icons/IconSend";

type Props = {
    disabled: boolean;
    onSend: (message: string) => void;
}

export const ChatMessageInput = ({ disabled, onSend }: Props) => {
    const [text, setText] = useState('');
    const textEl = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textEl.current) {
            textEl.current.style.height = '0px';
            let scrollHeight = textEl.current.scrollHeight;
            textEl.current.style.height = scrollHeight + 'px';
        }
    }, [text, textEl]);

    const handleTextKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.code.toLowerCase() === 'enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    }

    const handleSendMessage = () => {
        if (!disabled && text.trim() !== '') {
            onSend(text);
            setText('');
        }
    }
    
    return (
        <div className={`flex border-gray-800/50 bg-gpt-lightgray p-2 rounded-md ${disabled && 'opacity-50'}`}>
            <textarea ref={textEl} className="flex-1 border-0 bg-transparent resize-none outline-none h-7 max-h-48 overflow-y-auto" placeholder="Enviar uma mensagem" value={text} onChange={e => setText(e.target.value)} onKeyUp={handleTextKeyUp} disabled={disabled}></textarea>
            <div onClick={handleSendMessage} className={`self-end p-1 cursor-pointer rounded ${text.length ? 'opacity-100 hover:bg-black/20' : 'opacity-20'}`}>
                <IconSend width={14} height={14} />
            </div>
        </div>
    );
}