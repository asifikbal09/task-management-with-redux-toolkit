import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handelCancel()
  };

  const handelCancel = () => {
    setIsOpen(false);
    reset();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming hero">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            type="text"
            className="w-full rounded-md"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <textarea
            type="text"
            className="w-full rounded-md"
            id="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            type="date"
            className="w-full rounded-md"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            id="assigned to"
            {...register("assigned to")}
          >
            <option value="Asif Ikbal">Asif Ikbal</option>
            <option value="Tamim Ikbal">Tamim Ikbal</option>
            <option value="Samiha Binte Hasam">Samiha Binte Hasam</option>
            <option value="Hasam Uddin">Hasam Uddin</option>
            <option value="Aklima Khatun">Aklima Khatun</option>
            <option value="Mithila Rahman">Mithila Rahman</option>
            <option value="Nabila Rahman">Nabila Rahman</option>
            <option value="Rifat Rahman">Rifat Rahman</option>
            <option value="Ayat Rahman">Ayat Rahman</option>
            <option value="Mehedi Rahman">Mehedi Rahman</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button type="button" className="btn btn-danger" onClick={()=>handelCancel()}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
