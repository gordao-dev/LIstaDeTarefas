import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/Listitem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Tirar margarina', done: false },
    { id: 24, name: 'Validar Bilhetes', done: false },
  ]);

  return (
      <C.Container>
         <C.Area>
            <C.Header> Lista de Tarefas </C.Header>

            {/* Area for add new tasks */}

            {/* Task List */}

            {list.map((item, index)=>(
              <ListItem key={index} item={item} />
            ))} 

         </C.Area>
      </C.Container>
  );
}

export default App