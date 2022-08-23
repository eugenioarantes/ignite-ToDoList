import { useState } from "react";

import { Container, CreateTaskButton, CreateTaskContainer, Line, NoHaveTasks, StatusTask, TaskInformations, TaskNumberInformation, TasksList } from "./styles";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import SingleTask from "../SingleTask";

const PageContent: React.FC = () => {

  const [taskList, setTaskList] = useState<string[]>([]);

  const [newTask, setNewTask] = useState('');

  const [completedTasks, setCompletedTasks] = useState(0);

  const handleChangeTask = (word: string) => {
    setNewTask(word);
  };

  const handleCreateTask = () => {
    setTaskList([...taskList, newTask]);
    setNewTask('');
  };

  function deleteTask (taskToDelete: string, ischecked: boolean) {
    const tasksWithoutDeletedOne = taskList.filter(task => {
      return task !== taskToDelete;
    });

    setTaskList(tasksWithoutDeletedOne);

    if (ischecked) {
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
          value={newTask}
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
          <TaskNumberInformation> { taskList.length } </TaskNumberInformation>
        </StatusTask>

        <StatusTask $color="#8284FA">
          <span> Concluídas </span>

          { taskList.length === 0 
            ? <TaskNumberInformation> 0 </TaskNumberInformation>

            : <TaskNumberInformation>
                { completedTasks } de { taskList.length }
               </TaskNumberInformation>
          }
        </StatusTask>
      </TaskInformations>

      {taskList.length === 0   
        ? 
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
        :
         <TasksList>{
          taskList.map(task => {
            return (
              <SingleTask
                key={task}
                task={task}
                onDeleteTask={deleteTask}
                onSumCompletedTasks={sumCompletedTasks}
              />
            )
          })
          }
         </TasksList>
      }
  </Container>
  );
};

export default PageContent;