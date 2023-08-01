import { Chat } from '@/types/Chat';
import { ChatPlaceholder } from './ChatPlaceholder';
import { ChatMessageItem } from './ChatMessageItem';
import { ChatMessageLoading } from './ChatMessageLoading';
import { useEffect, useRef } from 'react';

type Props = {
    chat: Chat | undefined;
    loading: boolean;
}

export const ChatArea = ({ chat, loading }: Props) => {
    const scrollArea = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollArea.current?.scrollTo(0, scrollArea.current?.scrollHeight);
    }, [loading, chat?.messages.length]);

    return (
        <section ref={scrollArea} className="flex-auto h-0 overflow-y-scroll">
            {!chat && <ChatPlaceholder />}
            {chat && chat.messages.map(item => (<ChatMessageItem key={item.id} item={item} />))}
            {loading && <ChatMessageLoading />}
        </section>
    );
}