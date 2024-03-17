import { useCallback, useState } from 'react';
import TodoElement from '../components/TodoElement';
import useLocalStorage from '../components/CustomHooks';
function TodoList() {
  let [currentTodoElement, setCurrentTodoElement] = useState({ naslov: '', sadrzaj: '', status: '' });
  //let [todoList, setTodoList] = useState([]);

  let [todoList, setTodoList] = useLocalStorage('items', []);

  let addTodoListElement = (e) => {
    let niz = [...todoList];
    niz.push({ naslov: currentTodoElement.naslov, sadrzaj: currentTodoElement.sadrzaj, status: 'aktivan' });
    setTodoList(niz);
    console.log('handleAddTodo')
  }


  let handleStatusChange = (index) => {
    let noviNiz = [...todoList];
    console.log(noviNiz[index]);
    noviNiz[index].status = noviNiz[index].status === 'aktivan' ? 'neaktivan' : 'aktivan';
    setTodoList(noviNiz);
    console.log('status change');
  }


  let handleDelete = (index) => {
    let noviNiz = [...todoList];
    noviNiz.splice(index, 1);
    setTodoList(noviNiz);
    console.log('handle delete');
  }

    let handleOnChangeNaslov = (e) => {
        setCurrentTodoElement(prevState => ({ ...prevState, naslov: e.target.value }));
    console.log('naslov')
}
    let handleOnChangeSadrzaj = (e) => {
        setCurrentTodoElement(prevState => ({ ...prevState, sadrzaj: e.target.value }));
    console.log('sadrzaj')
}
  return (
    <div>
      <input
        type='text'
        placeholder='Naslov'
        onChange={handleOnChangeNaslov}
        value={currentTodoElement.naslov}
        style={{color: 'black'}}
      />
      <input
        type='text'
        placeholder='Sadrzaj'
        onChange={handleOnChangeSadrzaj}
        value={currentTodoElement.sadrzaj}
        style={{color: 'black'}}
      />
      <button onClick={addTodoListElement} style={{color: 'black'}}>Dodaj</button>
      {todoList.map((element, index) => (
        <TodoElement
          naslov={element.naslov}
          sadrzaj={element.sadrzaj}
          aktivan={element.status === 'aktivan' ? true : false}
          onDelete={() => {
            handleDelete(index);
          }}
          onStatusChange={() => {
            handleStatusChange(index);
          }}
        />
      ))}
    </div>
  );
}
export default TodoList;