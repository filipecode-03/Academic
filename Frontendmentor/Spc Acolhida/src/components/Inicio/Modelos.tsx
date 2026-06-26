import { FilePen, FilePlus2 } from "lucide-react"

function Modelos() {
    return (
        <div className="p-8">
            <h2 className="text-center font-bold text-[25px] lg:text-[30px]">Modelos de Solicitação de Demanda</h2>
            <div className="flex gap-8 mt-6 items-center justify-center text-center">
                <div className="bg-white border py-4 px-8 rounded-[10px]">
                    <FilePen size={60} />
                    DIEx
                </div>
                <div className="bg-white border py-4 px-8 rounded-[10px]">
                    <FilePlus2 size={60} />
                    DAN
                </div>
            </div>
        </div>
    )
}

export default Modelos