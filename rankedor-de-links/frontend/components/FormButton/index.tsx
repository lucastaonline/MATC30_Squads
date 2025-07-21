import React from "react"

interface Props {
    onClick?: () => void
}

export default function FormButton({ onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="bg-green-500 text-white font-semibold rounded-lg py-2 px-6 shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 scale-90 hover:scale-100 active:scale-80 cursor-pointer"
        >
            Enviar
        </button>
    )
}
