import { render, screen } from "@testing-library/react"
import Contact from "./Contact"

describe('Contact',() => {
  test('renders correctly', () => {
    render(<Contact />)
    const nameElement = screen.getByRole('textbox')
    expect(nameElement).toBeInTheDocument()
  })
})