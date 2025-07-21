import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FormButton from "../index"

describe("FormButton", () => {
    // Testa se o botão é renderizado com o texto correto
    test("renderiza o botão com texto 'Enviar'", () => {
        render(<FormButton />)

        // Verifica se o botão está presente na tela
        expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument()
    })

    // Testa se as classes de estilo Tailwind estão aplicadas
    test("aplica as classes de estilo corretamente", () => {
        render(<FormButton />)

        const botao = screen.getByRole("button", { name: /enviar/i })

        // Verifica a presença de classes específicas
        expect(botao).toHaveClass("bg-green-500")
        expect(botao).toHaveClass("hover:bg-green-600")
        expect(botao).toHaveClass("scale-90")
    })

    // Testa se a função onClick é chamada quando o botão é clicado
    test("chama a função onClick quando clicado", async () => {
        const user = userEvent.setup()
        const mockClick = jest.fn() // Cria função simulada

        render(<FormButton onClick={mockClick} />)

        const botao = screen.getByRole("button", { name: /enviar/i })
        await user.click(botao) // Simula clique no botão

        // Verifica se a função foi chamada uma vez
        expect(mockClick).toHaveBeenCalledTimes(1)
    })
})
