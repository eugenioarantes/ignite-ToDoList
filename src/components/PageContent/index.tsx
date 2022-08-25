import { useState } from "react";

import { Container, CreateTaskButton, CreateTaskContainer, Line, NoHaveTasks, StatusTask, TaskInformations, TaskNumberInformation, TasksList } from "./styles";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import SingleTask from "../SingleTask";
import Paginator from "../Paginator";
import { Task } from "../../types/Task";
import { uuid } from "uuidv4";

const PageContent: React.FC = () => {

  const [taskList, setTaskList] = useState<Task[]>([]);

  const [newWord, setNewWord] = useState('');

  const [completedTasks, setCompletedTasks] = useState(0);

  const [page, setPage] = useState(1);

  const taskListSize = taskList.length;

  const handleChangeTask = (word: string) => {
    setNewWord(word);
  };

  const handleCreateTask = () => {
    const createdTask = {
      id: uuid(),
      content: newWord,
      isAble: false,
    };

    setTaskList([...taskList, createdTask]);

    setNewWord('');
  };

  function deleteTask (idOfTaskToDelete: string, wasChecked: boolean) {
    const tasksWithoutDeletedOne = taskList.filter(task => {
      return task.id !== idOfTaskToDelete;
    });

    setTaskList(tasksWithoutDeletedOne);

    if (wasChecked) {
      setCompletedTasks(completedTasks - 1);
    } 
  };

  function sumCompletedTasks (isToSum: boolean) {
    ( isToSum ) ? setCompletedTasks(completedTasks + 1) : setCompletedTasks(completedTasks - 1);
  };

  return (
    <Container>
      <CreateTaskContainer>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          value={newWord}
          onChange={(event) => handleChangeTask(event.target.value)}
        />

        <CreateTaskButton onClick={handleCreateTask}>
          <span> Criar </span>
          <AiOutlinePlusCircle />
        </CreateTaskButton>
      </CreateTaskContainer>

      <TaskInformations>
        <StatusTask $color="#4EA8DE">
          <span> Tarefas criadas </span>
          <TaskNumberInformation> { taskListSize } </TaskNumberInformation>
        </StatusTask>

        <StatusTask $color="#8284FA">
          <span> Concluídas </span>

          { taskListSize === 0 
            ? <TaskNumberInformation> 0 </TaskNumberInformation>

            : <TaskNumberInformation>
                { completedTasks } de { taskListSize }
               </TaskNumberInformation>
          }
        </StatusTask>
      </TaskInformations>

      {taskList.length === 0   
        ? ( 
        <>
          <Line />

          <TasksList>
            <NoHaveTasks>
              <img src="/clipboard.svg" alt="clipboard image" />
              <strong> Você ainda não tem tarefas cadastradas </strong>
              <span>Crie tarefas e organize seus itens a fazer </span>
            </NoHaveTasks>
          </TasksList>
        </>
        )
        : (
        <TasksList>
          <Paginator
            totalCountOfRegisters={taskList.length}
            registersPerPage={3}
            currentPage={page}
            onPageChange={setPage}
            items={taskList}
          >
            {(displayRegisters) => (
              <>
                {displayRegisters.map((register) => (
                  <SingleTask 
                    key={register.id}
                    task={register}
                    onDeleteTask={deleteTask}
                    onSumCompletedTasks={sumCompletedTasks}
                  />
                ))}
              </>
            )}
          </Paginator>
        </TasksList>
        )}
  </Container>
  );
};

export default PageContent;