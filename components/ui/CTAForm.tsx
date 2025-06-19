import { useScript } from "@deco/deco/hooks";
import { RichText } from "apps/admin/widgets.ts";

interface Props {
    title?: RichText;
    info?: RichText;
}

function CTAForm({ title, info }: Props) {
    const modalId = "waitlist-form-old";

    const closeModal = (modalId: string) => {
        const modal = document.getElementById(modalId) as HTMLElement;
        modal?.classList.add("hidden");

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'clique',
            'custom_section': 'lp-komea:modal-formulario-lista-de-espera',
            'custom_type': 'botao',
            'custom_title': 'fechar-modal'
        });
    };

    return (
        <div id={modalId} className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
            <div className="bg-white rounded-[20px] p-6 lg:px-20 lg:py-10 w-[90%] lg:w-full max-w-[582px] relative shadow-lg">
                <button id="close-waitlist-modal" className="absolute top-4 right-4"
                    hx-on:click={useScript(closeModal, modalId)}
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 3.375C15.1075 3.375 12.2799 4.23274 9.87479 5.83976C7.46972 7.44677 5.5952 9.73089 4.48827 12.4033C3.38134 15.0756 3.09171 18.0162 3.65602 20.8532C4.22033 23.6902 5.61323 26.2961 7.65857 28.3414C9.70391 30.3868 12.3098 31.7797 15.1468 32.344C17.9838 32.9083 20.9244 32.6187 23.5968 31.5117C26.2691 30.4048 28.5532 28.5303 30.1602 26.1252C31.7673 23.7201 32.625 20.8926 32.625 18C32.6209 14.1225 31.0788 10.4049 28.3369 7.66309C25.5951 4.92125 21.8775 3.37909 18 3.375ZM23.2959 21.7041C23.4005 21.8086 23.4834 21.9327 23.5399 22.0692C23.5965 22.2058 23.6256 22.3522 23.6256 22.5C23.6256 22.6478 23.5965 22.7942 23.5399 22.9308C23.4834 23.0673 23.4005 23.1914 23.2959 23.2959C23.1914 23.4005 23.0673 23.4834 22.9308 23.5399C22.7942 23.5965 22.6478 23.6256 22.5 23.6256C22.3522 23.6256 22.2058 23.5965 22.0692 23.5399C21.9327 23.4834 21.8086 23.4005 21.7041 23.2959L18 19.5905L14.2959 23.2959C14.1914 23.4005 14.0673 23.4834 13.9308 23.5399C13.7942 23.5965 13.6478 23.6256 13.5 23.6256C13.3522 23.6256 13.2058 23.5965 13.0692 23.5399C12.9327 23.4834 12.8086 23.4005 12.7041 23.2959C12.5995 23.1914 12.5166 23.0673 12.4601 22.9308C12.4035 22.7942 12.3744 22.6478 12.3744 22.5C12.3744 22.3522 12.4035 22.2058 12.4601 22.0692C12.5166 21.9327 12.5995 21.8086 12.7041 21.7041L16.4095 18L12.7041 14.2959C12.493 14.0848 12.3744 13.7985 12.3744 13.5C12.3744 13.2015 12.493 12.9152 12.7041 12.7041C12.9152 12.493 13.2015 12.3744 13.5 12.3744C13.7985 12.3744 14.0848 12.493 14.2959 12.7041L18 16.4095L21.7041 12.7041C21.8086 12.5995 21.9327 12.5166 22.0692 12.4601C22.2058 12.4035 22.3522 12.3744 22.5 12.3744C22.6478 12.3744 22.7942 12.4035 22.9308 12.4601C23.0673 12.5166 23.1914 12.5995 23.2959 12.7041C23.4005 12.8086 23.4834 12.9327 23.5399 13.0692C23.5965 13.2058 23.6256 13.3522 23.6256 13.5C23.6256 13.6478 23.5965 13.7942 23.5399 13.9308C23.4834 14.0673 23.4005 14.1914 23.2959 14.2959L19.5905 18L23.2959 21.7041Z" fill="#00363A" />
                    </svg>

                </button>

                <h2 className="font-lektorat text-2xl lg:text-3xl text-[#00363A] font-bold text-center mb-5" dangerouslySetInnerHTML={{ __html: title ?? `Preencha o formulário para <br/> entrar na lista de espera` }} />

                <div className="flex items-start gap-2 text-sm text-[#5F6E82] mb-5 text-center">
                    <p dangerouslySetInnerHTML={{
                        __html: info ?? `🐝 Importante: <br />
                        Para testar a KOMEA você precisa ter uma loja ativa na Loja Integrada. Se ainda não tem, fique tranquilo — vamos te direcionar para criar sua conta.`}} />
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
                    const getSubmitButton = document.querySelector(".hs-submit .hs-button");
                        if (getSubmitButton) {
                            getSubmitButton.addEventListener('click', () => {
                                setTimeout(() => {
                                    const mainErrorMessage = document.querySelector(".hs_error_rollup .hs-main-font-element");
                                    const actionsWrapper = document.querySelector(".hs-submit .actions");

                                    if (mainErrorMessage && actionsWrapper) {
                                        actionsWrapper.classList.add('messageRemove');
                                    }
                                    }, 300);

                                window.dataLayer = window.dataLayer || [];
                                window.dataLayer.push({
                                 'event':'clique',
                                    'custom_section': 'lp-komea:modal-formulario-lista-de-espera',
                                    'custom_type': 'botao',
                                    'custom_title':'entrar-na-lista-de-espera'
                                });
                            });
                        }

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

                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            'event':'interacao',
                            'custom_section': 'lp-komea:modal-formulario-lista-de-espera',
                            'custom_type': 'checkbox',
                            'custom_title':'sim'  
                        });
                    } else if (hasStoreNo) {
                        selectedStoreOption = 'no';
                        inputWebsite.classList.add('hidden');

                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            'event':'interacao',
                            'custom_section': 'lp-komea:modal-formulario-lista-de-espera',
                            'custom_type': 'checkbox',
                            'custom_title':'ainda-nao'  
                        });
                    }
                };
                
                const radioButtons = formWrapper.querySelectorAll('input[type="radio"]');
                radioButtons.forEach(radio => {
                    radio.addEventListener('change', captureRadioValues);
                });

                const lastCheckboxModal = () => {
                    const acceptInfo = document.querySelector('.hs-form-booleancheckbox input');

                    if(acceptInfo.checked) {
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            'event':'interacao',
                            'custom_section': 'lp-komea:modal-formulario-lista-de-espera',
                            'custom_type': 'checkbox',
                            'custom_title':'aceito-recebimento'
                        });
                    }
                }

               const getLastCheckbox = formWrapper.querySelector(".hs-form-booleancheckbox input");
                    getLastCheckbox.addEventListener('change', lastCheckboxModal);

                    const trackFieldInteraction = (fieldClass, fieldName) => {
                        const field = document.querySelector(fieldClass + ' input');
                        if (field) {
                            field.addEventListener('focus', () => {
                                window.dataLayer = window.dataLayer || [];
                                window.dataLayer.push({
                                    'event': 'interacao',
                                    'custom_section': 'lp-komea:modal-formulario-lista-de-espera',
                                    'custom_type': 'campo',
                                    'custom_title': fieldName
                                });
                            });
                        }
                    };

                    const fieldsToTrack = [
                        { selector: '.hs-firstname.hs-fieldtype-text', name: 'nome' },
                        { selector: '.hs-email.hs-fieldtype-text', name: 'email' },
                        { selector: '.hs-company.hs-fieldtype-text', name: 'empresa' },
                        { selector: '.hs-website.hs-fieldtype-text', name: 'website' }
                    ];

                    fieldsToTrack.forEach(({ selector, name }) => {
                        trackFieldInteraction(selector, name);
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

                                  window.dataLayer = window.dataLayer || [];
                                    window.dataLayer.push({
                                        event: 'callback',
                                        custom_section: 'lp-komea:modal-formulario-lista-de-espera',
                                        custom_type: 'entrar-na-lista-de-espera',
                                        custom_title: 'sucesso'
                                    });
                            } else if (selectedStoreOption === 'no') {
                                const modal2 = document.getElementById('modal-register');
                                if (modal2) modal2.classList.remove('hidden');

                                  window.dataLayer = window.dataLayer || [];
                                    window.dataLayer.push({
                                        event: 'callback',
                                        custom_section: 'lp-komea:modal-formulario-lista-de-espera',
                                        custom_type: 'cadastro-confirmado',
                                        custom_title: 'sucesso'
                                    });
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
