export default function EditTopicForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className="px-8 py-4 border border-slate-500"
        placeholder="Add Topic"
      />
      <input
        type="text"
        className="px-8 py-4 border border-slate-500"
        placeholder="Add Description"
      />
      <button
        className="px-8 py-4 border border-slate-500 bg-green-600 text-white"
        type="submit"
      >
        Update
      </button>
    </form>
  );
}
