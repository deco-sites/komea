import { useScript } from "@deco/deco/hooks";

export function GuaranteedModal() {
    const modalId = "modal-guaranteed";

    const closeModal = (modalId: string) => {
        const modal = document.getElementById(modalId) as HTMLElement;
        modal?.classList.add("hidden");
    };

    return (
        <div
            id="modal-guaranteed"
            className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
            <div className="bg-white rounded-[20px] p-8 lg:p-[80px] w-[90%] max-w-[582px] relative shadow-xl text-center">
                <button
                    hx-on:click={useScript(closeModal, modalId)}
                    className="absolute top-4 right-4"
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 3.375C15.1075 3.375 12.2799 4.23274 9.87479 5.83976C7.46972 7.44677 5.5952 9.73089 4.48827 12.4033C3.38134 15.0756 3.09171 18.0162 3.65602 20.8532C4.22033 23.6902 5.61323 26.2961 7.65857 28.3414C9.70391 30.3868 12.3098 31.7797 15.1468 32.344C17.9838 32.9083 20.9244 32.6187 23.5968 31.5117C26.2691 30.4048 28.5532 28.5303 30.1602 26.1252C31.7673 23.7201 32.625 20.8926 32.625 18C32.6209 14.1225 31.0788 10.4049 28.3369 7.66309C25.5951 4.92125 21.8775 3.37909 18 3.375ZM23.2959 21.7041C23.4005 21.8086 23.4834 21.9327 23.5399 22.0692C23.5965 22.2058 23.6256 22.3522 23.6256 22.5C23.6256 22.6478 23.5965 22.7942 23.5399 22.9308C23.4834 23.0673 23.4005 23.1914 23.2959 23.2959C23.1914 23.4005 23.0673 23.4834 22.9308 23.5399C22.7942 23.5965 22.6478 23.6256 22.5 23.6256C22.3522 23.6256 22.2058 23.5965 22.0692 23.5399C21.9327 23.4834 21.8086 23.4005 21.7041 23.2959L18 19.5905L14.2959 23.2959C14.1914 23.4005 14.0673 23.4834 13.9308 23.5399C13.7942 23.5965 13.6478 23.6256 13.5 23.6256C13.3522 23.6256 13.2058 23.5965 13.0692 23.5399C12.9327 23.4834 12.8086 23.4005 12.7041 23.2959C12.5995 23.1914 12.5166 23.0673 12.4601 22.9308C12.4035 22.7942 12.3744 22.6478 12.3744 22.5C12.3744 22.3522 12.4035 22.2058 12.4601 22.0692C12.5166 21.9327 12.5995 21.8086 12.7041 21.7041L16.4095 18L12.7041 14.2959C12.493 14.0848 12.3744 13.7985 12.3744 13.5C12.3744 13.2015 12.493 12.9152 12.7041 12.7041C12.9152 12.493 13.2015 12.3744 13.5 12.3744C13.7985 12.3744 14.0848 12.493 14.2959 12.7041L18 16.4095L21.7041 12.7041C21.8086 12.5995 21.9327 12.5166 22.0692 12.4601C22.2058 12.4035 22.3522 12.3744 22.5 12.3744C22.6478 12.3744 22.7942 12.4035 22.9308 12.4601C23.0673 12.5166 23.1914 12.5995 23.2959 12.7041C23.4005 12.8086 23.4834 12.9327 23.5399 13.0692C23.5965 13.2058 23.6256 13.3522 23.6256 13.5C23.6256 13.6478 23.5965 13.7942 23.5399 13.9308C23.4834 14.0673 23.4005 14.1914 23.2959 14.2959L19.5905 18L23.2959 21.7041Z" fill="#00363A" />
                    </svg>

                </button>
                <h2 className="text-[#00363A] bg-[#EEFC58] px-3 py-1 rounded text-xl lg:text-[32px] font-bold inline-block mb-4 lg:mb-6 font-lektorat">
                    Acesso garantido!
                </h2>
                <p className="text-[#5F6E82] mb-2">Em breve você receberá atualizações sobre o seu acesso à Komea</p>
                <p className="text-[#5F6E82]"><strong>Spoiler:</strong> seu e-commerce vai<br /> começar a trabalhar com você.</p>
                <button
                    className="mt-6 lg:mt-[40px] bg-[#00363A] text-white rounded-full px-6 py-[14px] font-semibold text-sm cursor-pointer"
                    hx-on:click={useScript(closeModal, modalId)}
                >
                    Voltar à navegação
                </button>
            </div>
        </div>
    )
}

export function RegisterModal() {

    const modalId = "modal-register";

    const closeModal = (modalId: string) => {
        const modal = document.getElementById(modalId) as HTMLElement;
        modal?.classList.add("hidden");
    };

    return (
        <div
            id="modal-register"
            className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
            <div className="bg-white rounded-[20px] p-8 lg:p-[80px] w-[90%] max-w-[582px] relative shadow-xl text-center">
                <button
                    hx-on:click={useScript(closeModal, modalId)}
                    className="absolute top-4 right-4"
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 3.375C15.1075 3.375 12.2799 4.23274 9.87479 5.83976C7.46972 7.44677 5.5952 9.73089 4.48827 12.4033C3.38134 15.0756 3.09171 18.0162 3.65602 20.8532C4.22033 23.6902 5.61323 26.2961 7.65857 28.3414C9.70391 30.3868 12.3098 31.7797 15.1468 32.344C17.9838 32.9083 20.9244 32.6187 23.5968 31.5117C26.2691 30.4048 28.5532 28.5303 30.1602 26.1252C31.7673 23.7201 32.625 20.8926 32.625 18C32.6209 14.1225 31.0788 10.4049 28.3369 7.66309C25.5951 4.92125 21.8775 3.37909 18 3.375ZM23.2959 21.7041C23.4005 21.8086 23.4834 21.9327 23.5399 22.0692C23.5965 22.2058 23.6256 22.3522 23.6256 22.5C23.6256 22.6478 23.5965 22.7942 23.5399 22.9308C23.4834 23.0673 23.4005 23.1914 23.2959 23.2959C23.1914 23.4005 23.0673 23.4834 22.9308 23.5399C22.7942 23.5965 22.6478 23.6256 22.5 23.6256C22.3522 23.6256 22.2058 23.5965 22.0692 23.5399C21.9327 23.4834 21.8086 23.4005 21.7041 23.2959L18 19.5905L14.2959 23.2959C14.1914 23.4005 14.0673 23.4834 13.9308 23.5399C13.7942 23.5965 13.6478 23.6256 13.5 23.6256C13.3522 23.6256 13.2058 23.5965 13.0692 23.5399C12.9327 23.4834 12.8086 23.4005 12.7041 23.2959C12.5995 23.1914 12.5166 23.0673 12.4601 22.9308C12.4035 22.7942 12.3744 22.6478 12.3744 22.5C12.3744 22.3522 12.4035 22.2058 12.4601 22.0692C12.5166 21.9327 12.5995 21.8086 12.7041 21.7041L16.4095 18L12.7041 14.2959C12.493 14.0848 12.3744 13.7985 12.3744 13.5C12.3744 13.2015 12.493 12.9152 12.7041 12.7041C12.9152 12.493 13.2015 12.3744 13.5 12.3744C13.7985 12.3744 14.0848 12.493 14.2959 12.7041L18 16.4095L21.7041 12.7041C21.8086 12.5995 21.9327 12.5166 22.0692 12.4601C22.2058 12.4035 22.3522 12.3744 22.5 12.3744C22.6478 12.3744 22.7942 12.4035 22.9308 12.4601C23.0673 12.5166 23.1914 12.5995 23.2959 12.7041C23.4005 12.8086 23.4834 12.9327 23.5399 13.0692C23.5965 13.2058 23.6256 13.3522 23.6256 13.5C23.6256 13.6478 23.5965 13.7942 23.5399 13.9308C23.4834 14.0673 23.4005 14.1914 23.2959 14.2959L19.5905 18L23.2959 21.7041Z" fill="#00363A" />
                    </svg>

                </button>
                <h2 className="text-[#00363A] bg-[#EEFC58] px-3 py-1 rounded text-xl lg:text-[32px] font-bold inline-block mb-4 lg:mb-6 font-lektorat">
                    Cadastro confirmado
                </h2>
                <p className="text-[#5F6E82] mb-2 max-w-[376px] mx-auto">Você está na sua lista de interessados para testar a Komea, mas lembre-se para usar o KOMEA, você precisa ter sua loja ativa na Loja Integrada — e o melhor momento para isso é agora.</p>
                <p className="text-[#5F6E82]"><strong>Abra sua loja agora, é rápido, simples e fácil.</strong></p>
                <a
                    className="mt-6 lg:mt-[40px] bg-[#00363A] text-white rounded-full px-6 py-[14px] font-semibold text-sm block w-fit mx-auto"
                    hx-on:click={useScript(closeModal, modalId)}
                    href="https://app.lojaintegrada.com.br/public/assinar?"
                    target="_blank"
                >
                    Criar minha loja agora
                </a>
            </div>
        </div>
    )
}

function CTAForm() {
    const modalId = "waitlist-form";

    const closeModal = (modalId: string) => {
        const modal = document.getElementById(modalId) as HTMLElement;
        modal?.classList.add("hidden");
    };

    return (
        <div id="waitlist-form" className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-[20px] p-6 lg:p-20 w-[90%] lg:w-full max-w-[582px] relative shadow-lg">
                <button id="close-waitlist-modal" className="absolute top-4 right-4"
                    hx-on:click={useScript(closeModal, modalId)}
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 3.375C15.1075 3.375 12.2799 4.23274 9.87479 5.83976C7.46972 7.44677 5.5952 9.73089 4.48827 12.4033C3.38134 15.0756 3.09171 18.0162 3.65602 20.8532C4.22033 23.6902 5.61323 26.2961 7.65857 28.3414C9.70391 30.3868 12.3098 31.7797 15.1468 32.344C17.9838 32.9083 20.9244 32.6187 23.5968 31.5117C26.2691 30.4048 28.5532 28.5303 30.1602 26.1252C31.7673 23.7201 32.625 20.8926 32.625 18C32.6209 14.1225 31.0788 10.4049 28.3369 7.66309C25.5951 4.92125 21.8775 3.37909 18 3.375ZM23.2959 21.7041C23.4005 21.8086 23.4834 21.9327 23.5399 22.0692C23.5965 22.2058 23.6256 22.3522 23.6256 22.5C23.6256 22.6478 23.5965 22.7942 23.5399 22.9308C23.4834 23.0673 23.4005 23.1914 23.2959 23.2959C23.1914 23.4005 23.0673 23.4834 22.9308 23.5399C22.7942 23.5965 22.6478 23.6256 22.5 23.6256C22.3522 23.6256 22.2058 23.5965 22.0692 23.5399C21.9327 23.4834 21.8086 23.4005 21.7041 23.2959L18 19.5905L14.2959 23.2959C14.1914 23.4005 14.0673 23.4834 13.9308 23.5399C13.7942 23.5965 13.6478 23.6256 13.5 23.6256C13.3522 23.6256 13.2058 23.5965 13.0692 23.5399C12.9327 23.4834 12.8086 23.4005 12.7041 23.2959C12.5995 23.1914 12.5166 23.0673 12.4601 22.9308C12.4035 22.7942 12.3744 22.6478 12.3744 22.5C12.3744 22.3522 12.4035 22.2058 12.4601 22.0692C12.5166 21.9327 12.5995 21.8086 12.7041 21.7041L16.4095 18L12.7041 14.2959C12.493 14.0848 12.3744 13.7985 12.3744 13.5C12.3744 13.2015 12.493 12.9152 12.7041 12.7041C12.9152 12.493 13.2015 12.3744 13.5 12.3744C13.7985 12.3744 14.0848 12.493 14.2959 12.7041L18 16.4095L21.7041 12.7041C21.8086 12.5995 21.9327 12.5166 22.0692 12.4601C22.2058 12.4035 22.3522 12.3744 22.5 12.3744C22.6478 12.3744 22.7942 12.4035 22.9308 12.4601C23.0673 12.5166 23.1914 12.5995 23.2959 12.7041C23.4005 12.8086 23.4834 12.9327 23.5399 13.0692C23.5965 13.2058 23.6256 13.3522 23.6256 13.5C23.6256 13.6478 23.5965 13.7942 23.5399 13.9308C23.4834 14.0673 23.4005 14.1914 23.2959 14.2959L19.5905 18L23.2959 21.7041Z" fill="#00363A" />
                    </svg>

                </button>

                <h2 className="font-lektorat text-2xl lg:text-3xl text-[#00363A] font-bold text-center mb-6 lg:mb-10">
                    Preencha o formulário para <br />
                    entrar na lista de espera
                </h2>

                <div className="flex items-start gap-2 text-sm text-[#5F6E82] mb-6 lg:mb-10 text-center">
                    <p>
                        🐝 Importante: <br />
                        Para testar a KOMEA você precisa ter uma loja ativa na Loja Integrada. Se ainda não tem, fique tranquilo — vamos te direcionar para criar sua conta.
                    </p>
                </div>

                <script
                    charSet="utf-8"
                    type="text/javascript"
                    src="//js.hsforms.net/forms/embed/v2.js"
                ></script>
                <script
                    charSet="utf-8"
                    type="text/javascript"
                    src="/formSnippet.js"
                ></script>

                <script defer dangerouslySetInnerHTML={{
                    __html: `
        let selectedStoreOption = null;
        
        const interval = setInterval(() => {
            const formWrapper = document.querySelector('.hbspt-form');
            if (formWrapper) {
                    const allTextFields = document.querySelectorAll('.hs-fieldtype-text input'); 

                    if (allTextFields.length > 0) {
                        allTextFields.forEach(input => {
                            input.addEventListener('focus', function () {
                                const textFieldSpans = input.closest('.hs-fieldtype-text')?.querySelectorAll('label span');

                                textFieldSpans.forEach(span => {
                                    span.style.fontSize = '12px';
                                });
                            });

                            input.addEventListener('blur', function () {
                                const textFieldSpans = input.closest('.hs-fieldtype-text')?.querySelectorAll('label span');

                                textFieldSpans.forEach(span => {
                                    span.style.fontSize = '0px';
                                });
                            });
                        });
                    }

                const captureRadioValues = () => {
                    const hasStoreYes = document.querySelector('input[type="radio"][value="Sim"]:checked');
                    const hasStoreNo = document.querySelector('input[type="radio"][value="Ainda não"]:checked');
                     const inputWebsite = document.querySelector('.hs_website');
                    if (hasStoreYes) {
                        selectedStoreOption = 'yes';
                        inputWebsite.classList.remove('hidden');
                    } else if (hasStoreNo) {
                        selectedStoreOption = 'no';
                        inputWebsite.classList.add('hidden');
                    }
                };
                
                const radioButtons = formWrapper.querySelectorAll('input[type="radio"]');
                radioButtons.forEach(radio => {
                    radio.addEventListener('change', captureRadioValues);
                });
                
                const observer = new MutationObserver((mutationsList) => {
                    for (const mutation of mutationsList) {
                        if (
                            mutation.type === 'childList' &&
                            mutation.addedNodes.length > 0 &&
                            [...mutation.addedNodes].some((node) =>
                                node.textContent?.includes('Obrigado') || node.textContent?.includes('sucesso')
                            )
                        ) {
                            const waitlistForm = document.getElementById('waitlist-form');
                            if (waitlistForm) waitlistForm.classList.add('hidden');
                            
                            if (selectedStoreOption === 'yes') {
                                const modal = document.getElementById('modal-guaranteed');
                                if (modal) modal.classList.remove('hidden');
                            } else if (selectedStoreOption === 'no') {
                                const modal2 = document.getElementById('modal-register');
                                if (modal2) modal2.classList.remove('hidden');
                            }
                        }
                    }
                });
                
                observer.observe(formWrapper, { childList: true, subtree: true });
                clearInterval(interval);
            }
        }, 500);
    `
                }} />
            </div>
        </div>
    );
}

export default CTAForm;
