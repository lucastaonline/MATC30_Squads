import { render, screen } from "@testing-library/react"
import FormButton from "../index"

describe("FormButton", () => {
    test("renderiza o botão com texto 'Enviar'", () => {
        render(<FormButton />)
        expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument()
    })
})
