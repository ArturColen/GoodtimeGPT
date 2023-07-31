import IconFlashOutline from "./icons/IconFlashOutline";
import IconSunTwentyFour from "./icons/IconSunTwentyFour";
import IconWarningSharp from "./icons/IconWarningSharp";

export const ChatPlaceholder = () => {
    return (
        <div className="m-5">
            <h3 className="text-4xl font-bold text-center my-8">GoodtimeGPT</h3>
            <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">
                <div>
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconSunTwentyFour width={24} height={24} className="mr-3" />
                        Exemplos
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">" Explique a computação quântica em termos simples "</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">" Tem alguma ideia criativa para o aniversário de uma criança de 10 anos? "</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">" Como faço uma solicitação HTTP em Javascript? "</div>
                </div>
                <div>
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconFlashOutline width={24} height={24} className="mr-3" />
                        Capacidades
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Lembra o que o usuário disse anteriormente na conversa</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Permite que o usuário forneça correções de acompanhamento</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Treinado para recusar pedidos inapropriados</div>
                </div>
                <div>
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconWarningSharp width={24} height={24} className="mr-3" />
                        Limitações
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Ocasionalmente pode gerar informações incorretas</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Ocasionalmente, pode produzir instruções prejudiciais ou conteúdo tendencioso</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Conhecimento limitado do mundo e eventos após 2021</div>
                </div>
            </div>
        </div>
    );
}