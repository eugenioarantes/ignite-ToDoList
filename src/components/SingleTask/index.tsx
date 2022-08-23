import { useState } from "react";
import { Checkbox, ContentLabel, DeleteButton, IconTrash, ProjectCard, ProjectContainer, VerifyIcon } from "./styles";

interface SingleTaskProps {
  // children?: never;
  task: string;
  onDeleteTask: (task: string, checked: boolean) => void;
  onSumCompletedTasks: (isToSum: boolean) => void;
}

const SingleTask: React.FC<SingleTaskProps> = ({ task, onDeleteTask, onSumCompletedTasks }) => {

  const [checked, setChecked] = useState(false);
  
  const handleChange = () => {
    const isChecked = !checked;

    setChecked(isChecked);

    ( isChecked ) ? onSumCompletedTasks(true) : onSumCompletedTasks(false);
  };

  function handleDeleteTask() {
    onDeleteTask(task, checked);
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

          <span>{ task }</span> 
        </ContentLabel>

        <DeleteButton onClick={handleDeleteTask} title='Deletar'>
          <IconTrash />
        </DeleteButton>
      </ProjectCard>

    </ProjectContainer>
  );
};

export default SingleTask;