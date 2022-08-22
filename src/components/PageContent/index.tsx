import { useState } from "react";

import { Container, CreateTaskButton, CreateTaskContainer, Line, NoHaveTasks, StatusTask, TaskInformations, TaskNumberInformation, TasksList } from "./styles";
import { AiOutlinePlusCircle } from 'react-icons/ai';

const FIRST_POSITION_ARRAY = 0;

const PageContent: React.FC = () => {

  const [tasks, setTasks] = useState(['']);
  
  return (
    <Container>
      <CreateTaskContainer>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <CreateTaskButton>
          <span> Criar </span>
          <AiOutlinePlusCircle />
        </CreateTaskButton>
      </CreateTaskContainer>

      <TaskInformations>
        <StatusTask $color="#4EA8DE">
          <span> Tarefas criadas </span>
          <TaskNumberInformation> 0 </TaskNumberInformation>
        </StatusTask>

        <StatusTask $color="#8284FA">
          <span> Concluídas </span>
          <TaskNumberInformation> 0 </TaskNumberInformation>
        </StatusTask>
      </TaskInformations>

      <Line />

      <TasksList>
      {tasks[FIRST_POSITION_ARRAY] === ''  
        ? <NoHaveTasks>
            <img src="/clipboard.svg" alt="clipboard image" />
            <strong> Você ainda não tem tarefas cadastradas </strong>
            <span>Crie tarefas e organize seus itens a fazer </span>
          </NoHaveTasks>

        : 
          tasks.map(task => {
            return (
              <SingleTask
                key={task.id}
                content={task.content}
                isAble={task.isAble}
              />
            )
          })
      }

        {/* {tasks.map(task => {
          return (
          <Task
            key={task.id}
            content={task.content}
            isAble={task.isAble}
          />
          )
        })} */}
      </TasksList>
  </Container>
  );
};

export default PageContent;