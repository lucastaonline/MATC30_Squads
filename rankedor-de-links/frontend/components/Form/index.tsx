import React from 'react';
import FormButton from "../FormButton"
import FormInput from "../FormInput";

export default function Form() {
    return(
        <div className="rounded-lg flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50 font-sans">
            <div className="bg-white rounded-2xl shadow-lg text-black p-8 min-w-[350px] w-full max-w-md border border-gray-100">
                <h1 className="font-bold text-2xl text-center mb-7 tracking-tight">Digite os dados da sua empresa:</h1>
                <form className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col items-start w-full gap-2">
                        <FormInput />
                    </div>
                    <hr className="my-2 border-gray-200" />
                    <div className="flex justify-center w-full mt-2">
                        <FormButton />
                    </div>
                </form>
            </div>
        </div>
    )
}