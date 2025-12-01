import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

test('挨拶が正常にレンダリングされるか？', () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i)
  expect(textElement).toBeInTheDocument() 
})

test('test with a name', () => {
  render(<Greet name='Yamachoki'/>)
  const textElement = screen.getByText(/hello Yamachoki/i)
  expect(textElement).toBeInTheDocument() 
})