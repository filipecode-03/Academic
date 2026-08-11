import { Download } from "lucide-react";

function Tables() {
    return (
        <div className="p-8">
            <div className="mx-auto max-w-5xl">
                <div className="flex items-center justify-center gap-5 mb-8">
                    <div className="h-0.5 flex-1 bg-black"></div>
                    <h2 className="text-center font-bold whitespace-nowrap">
                        ETP (Estudo Técnico Preliminar)
                    </h2>
                    <div className="h-0.5 flex-1 bg-black"></div>
                </div>

                <table className="w-fit mx-auto border border-gray-300 border-collapse">
                    <thead>
                        <tr className="bg-[#003049] text-white">
                            <th className="border border-gray-300 px-4 py-3 text-left">
                                TIPO
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left">
                                NÚMERO DO DOCUMENTO NO COMPRAS
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3">
                                Padrão
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                                146/2025
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-gray-300 px-4 py-3">
                                Móveis
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                                181/2025
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mx-auto max-w-5xl mt-20">
                <div className="flex items-center justify-center gap-5 mb-8">
                    <div className="h-0.5 flex-1 bg-black"></div>
                    <h2 className="text-center font-bold whitespace-nowrap">
                        Pesquisa de Preço
                    </h2>
                    <div className="h-0.5 flex-1 bg-black"></div>
                </div>

                <table className="w-200 mx-auto border border-gray-300 border-collapse">
                    <thead>
                        <tr className="bg-[#003049] text-white">
                            <th className="border border-gray-300 px-4 py-3 text-left">
                                TIPO
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left">
                                ESPECIFICAÇÕES
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-3">
                                Parâmetro I
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                                <p>Compras governamentais</p>
                                <p>Fontes aceitas: PNCP e Compras Net</p>
                                <p>Este parâmetro usa dados oficiais de compras já realizadas pelo governo. As principais fontes são o Painel de Preços do Portal Nacional de Contratações Públicas (PNCP) e o sistema Compras.gov.br (às vezes chamado de Compras Net na prática), onde estão registrados valores de aquisições públicas anteriores. É considerado o melhor parâmetro porque reflete preços efetivamente praticados pelo setor público, com dados objetivos e comparáveis.</p>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-gray-300 px-4 py-3">
                                Parâmetro II
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                                <p>Outros entes públicos</p>
                                <p>Este parâmetro considera preços praticados em aquisições e contratações similares feitas por outros órgãos ou entidades públicas (federais, estaduais, municipais). Isso inclui consultas a sistemas eletrônicos de compras ou registros de preços de outras administrações. É útil quando o PNCP não tem dados suficientes ou não há muitas compras semelhantes no sistema principal.</p>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-gray-300 px-4 py-3">
                                Parâmetro III
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                                <p>Domínio Amplo</p>
                                <p>Aqui se faz pesquisa de preços publicada em sítios eletrônicos ou mídias especializadas e de domínio amplo, ou seja, qualquer site da internet que contenha preços do bem ou serviço pesquisado — desde que atualizado, com data e hora de acesso registradas. Exemplos: portais de comércio, catálogos online, tabelas de referência ou sites especializados do setor.</p>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-gray-300 px-4 py-3">
                                Parâmetro IV
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                                <p>Fornecedores</p>
                                <p>Este parâmetro baseia-se na cotação direta com fornecedores, por meio de pedidos formais (e-mail, carta, etc.)</p>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-gray-300 px-4 py-3">
                                Parâmetro V
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                                <p>Notas Fiscais</p>
                                <p>O uso de notas fiscais eletrônicas utiliza valores reais de vendas anteriores. Isso pode ser feito por meio de bases oficiais de notas fiscais, quando disponíveis, ou relatórios que extraem preços de NFes emitidas por fornecedores. Esse parâmetro é especialmente útil quando os anteriores (I a IV) não geram dados suficientes.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mx-auto max-w-5xl mt-20">
                <div className="flex items-center justify-center gap-5 mb-8">
                    <div className="h-0.5 flex-1 bg-black"></div>
                    <h2 className="text-center font-bold whitespace-nowrap">
                        Mapa Comparativo
                    </h2>
                    <div className="h-0.5 flex-1 bg-black"></div>
                </div>

                <table className="w-200 mx-auto border border-gray-300 border-collapse">
                    <thead>
                        <tr className="bg-[#003049] text-white">
                            <th className="border w-50 border-gray-300 px-4 py-3 text-left">
                                Regras
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left">
                                ESPECIFICAÇÕES
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        <tr>
                            <td className="border border-gray-300 px-4 py-3">
                                Não mesclar células
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                                <p>O mapa comparativo foi elaborado a partir de diversas fórmulas aritméticas e regras de formatação condicional, que são essenciais para o seu correto funcionamento. A utilização dessas fórmulas permite a análise automática dos valores, bem como a identificação de preços exequíveis e inexequíveis. Contudo, a mesclagem de células compromete diretamente essa estrutura, pois provoca a quebra das fórmulas e das formatações condicionais, tornando o mapa comparativo desatualizado e tecnicamente defasado.</p>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-gray-300 px-4 py-3">
                                Não colorir células
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                                <p>Como as células possuem formatação condicional, a aplicação manual de cores não surtirá efeito, uma vez que essas cores serão automaticamente sobrescritas. Além disso, essa intervenção pode comprometer o correto funcionamento do mapa comparativo.</p>
                            </td>
                        </tr>

                        <tr>
                            <td className="border border-gray-300 px-4 py-3">
                                Conferir os valores
                            </td>
                            <td className="border border-gray-300 px-4 py-3">
                                <p>Sempre que finalizar a inserção dos valores selecionados na pesquisa, verifique se os valores finais estão com as fórmulas corretas e se os resultados apresentados condizem com o cálculo final.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="bg-[#003049] mt-5 rounded-full flex items-center py-3 px-4 gap-2 text-white mx-auto">
                    <Download size={20} />
                    <p>Download</p>
                </button>
            </div>
        </div>
    );
}

export default Tables;