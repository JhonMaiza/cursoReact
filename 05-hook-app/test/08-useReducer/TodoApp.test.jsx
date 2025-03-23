import { render, screen } from "@testing-library/react"
import { TodoApp } from '../../src/08-reducer/TodoApp'
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos')

describe('Pruebas sobre el TodoApp', () => {

  useTodos.mockReturnValue( {
    todos:[
      { id: 1, description: 'Todo 1', done: false },
      { id: 2, description: 'Todo 2', done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleDeleteTodo: jest.fn()
  })
  
  test('debe de mostar el componente correctamente', () => {
    render( <TodoApp />);
    // screen.debug()
    expect( screen.getAllByText( 'Todo 1' ) ).toBeTruthy();
    expect( screen.getAllByText( 'Todo 2' ) ).toBeTruthy();
    expect( screen.getAllByRole( 'textbox' ) ).toBeTruthy();
  });
  
})
