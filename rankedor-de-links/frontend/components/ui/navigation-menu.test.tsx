import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent
} from "./navigation-menu"

describe("NavigationMenu", () => {
  it("renderiza os elementos básicos do menu", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div>Conteúdo do menu</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )

    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument()
    expect(screen.getByText(/conteúdo do menu/i)).toBeInTheDocument()
  })
})
