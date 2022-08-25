import { useState } from "react";
import { Task } from "../../types/Task";
import { Checkbox, ContentLabel, DeleteButton, IconTrash, ProjectCard, ProjectContainer, VerifyIcon } from "./styles";

interface SingleTaskProps {
  children?: never;
  task: Task;
  onDeleteTask: (idTask: string, checked: boolean) => void;
  onSumCompletedTasks: (isToSum: boolean) => void;
}

const SingleTask: React.FC<SingleTaskProps> = (
  { 
    task,
    onDeleteTask,
    onSumCompletedTasks
  }) => {

  const [checked, setChecked] = useState<boolean>(task.isAble);
  
  const handleChange = () => {
    const isChecked = !checked;

    setChecked(isChecked);
    task.isAble = isChecked;

    ( isChecked ) ? onSumCompletedTasks(true) : onSumCompletedTasks(false);
  };

  function handleDeleteTask() {
    onDeleteTask(task.id, checked);
  };

  return (
    <ProjectContainer>
      <ProjectCard>

        <ContentLabel $checked={checked}>
          <Checkbox 
            type='checkbox'
            checked={checked}
            onChange={handleChange}
          />

          <VerifyIcon $checked={checked} />

          <span>{ task.content }</span> 
        </ContentLabel>

        <DeleteButton onClick={handleDeleteTask} title='Deletar'>
          <IconTrash />
        </DeleteButton>
      </ProjectCard>

    </ProjectContainer>
  );
};

export default SingleTask;