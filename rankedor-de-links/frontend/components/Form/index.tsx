import FormButton from "../FormButton"

export default function Form() {
    return(
        <div className="bg-[#ccc] rounded-sm shadow-sm shadow-white text-black p-2">
            <h1 className="text-center mb-5">Digite os dados da sua empresa:</h1>
            <form className="text-center">
                <div className="flex gap-2 mb-5">
                    <label>Teste</label>
                    <input type="text" className="outline-none border rounded-md"/>
                </div>
                <FormButton />
            </form>
        </div>
    )
}