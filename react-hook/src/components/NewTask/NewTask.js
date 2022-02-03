import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const {isLoading, error, sendRequest: sendTaskRequest} = useHttp();

  

  const enterTaskHandler = async (taskText) => {
    const applyData = (tasksObj)=>{
      const generatedId = tasksObj.name;
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);

      return createdTask;
    };
    sendTaskRequest(
      {
        url: "https://react-http-1513d-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      applyData
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
