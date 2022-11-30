import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {addTodo, ITodo, saveTodos,fetchTodos} from "../features/todoSlice";
import {useAppDispatch, useAppSelector} from "../store";

const Test = () => {


    useEffect(()=> {
        dispatch(fetchTodos())
    }, [])

    const dispatch =useAppDispatch()
    const myTodos = useAppSelector(state => state.todos.todos)

  const [todos, setTodos] = useState<ITodo[]>([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);

  // function adds() {Y
  //     dispatch(addTodo('text') )
  // }

    function handleChange(e: ChangeEvent<HTMLInputElement>){


    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
const payload:ITodo = {
    title:title,
    content:content
}


dispatch(saveTodos(payload))

    }
  return (

      <>



<section className={'flex flex-col  justify-center items-center'}>
          <h1 className='text-center text-xl'>Using React -Typescript and Redux toolkit using thunk API</h1>
    <section className=" flex gap-2 mx-auto w-1/2 pt-32">

    <section className="w-1/2 border rounded-lg ">
        <form onSubmit={handleSubmit}
            className="bg-white flex flex-col gap-4 w-full p-8 rounded-lg mb-2 ">
            <section className="flex flex-col gap-2">
                <label htmlFor="title">Title</label>
                <input onChange={(e)=> setTitle((prevState)=> e.target.value )} name='title' className="p-2 border focus-within:outline-0 border-gray-300 rounded-lg"
                     value={title}  id="title"/>
            </section>
            <section className="flex flex-col gap-2">
                <label htmlFor="content">Content</label>
                <textarea
                    name={'content'}
                    onChange={(e)=> setContent((prevState)=> e.target.value )}
                    className="p-2 border focus-within:ring-0 focus-within:border-gray-100 rounded-lg border-gray-300"
                    cols={30}
                    value={content}
                    id="content" rows={10}></textarea>
            </section>
            <div className="w-full">
                <button
                    className="btn-primary w-full text-white p-2 rounded">Save
                </button>
            </div>
        </form>
    </section>




<section className='w-1/2'>

    <div  className="bg-white  w-full border p-4 rounded-lg mb-2 ">
    <section className="flex flex-col">
        {myTodos.map((todo, index)=> {
            return <section key={index} className='flex justify-between items-center gap-4'>
            <div className='flex flex-col'><p className="text-2xl"> {todo.title} </p>
            <p className="text-2xl"> {todo.content} </p>
</div>
            <section className="flex gap-3">
            <p  className="text-red-600">Edit</p>
            <p  className="text-red-600">Delete</p>
            </section>
            </section>

        })}
    </section>
    </div>

    </section>





</section>

       <p>Posts</p>

    </section>

      </>
    // <>
    //   <button
    //     className="bg-green-400 text-white rounded w-1/2 p-2"
    //     // onClick={() => dispatch(pendingRequest())}
    //   >
    //     Test
    //   </button>
    //   <section className="flex gap-6 mt-20 text-black text-sm  border-b">
    //     <p
    //       className={`${
    //         index === 0 && "border-b-2 font-bold border-[#ff931f]"
    //       } text-gray-500 hover:cursor-pointer p-2`}
    //       onClick={() => {
    //         setIndex(0);
    //         // dispatch(pendingRequest(5));
    //         // dispatch(pendingRequest())
    //         //    dispatch(pendingRequest())
    //         //   setTableData(
    //         //     tData.filter((item: any) => item.status === 'Pending')
    //         //   );
    //       }}
    //     >
    //       Pending
    //     </p>
    //     <p
    //       className={`${
    //         index === 1 && "border-b-2  font-bold border-[#ff931f]"
    //       } text-gray-500 hover:cursor-pointer p-2`}
    //       onClick={() => {
    //         setIndex(1);
    //         //   setTableData(
    //         //     tData.filter((item: any) => item.status === 'Published')
    //         //   );
    //       }}
    //     >
    //       Published
    //     </p>
    //
    //     <p
    //       className={`${
    //         index === 2 && "border-b-2 font-bold border-[#ff931f]"
    //       } text-gray-500 hover:cursor-pointer p-2`}
    //       onClick={() => {
    //         setIndex(2);
    //         //   setTableData(
    //         //     tData.filter((item: any) => item.status === 'Unpublished')
    //         //   );
    //       }}
    //     >
    //       Unpublished
    //     </p>
    //
    //     <p
    //       className={`${
    //         index === 3 && "border-b-2 font-bold  border-[#ff931f]"
    //       } text-gray-500 hover:cursor-pointer p-2`}
    //       onClick={() => {
    //         setIndex(3);
    //         //   setTableData(
    //         //     tData.filter((item: any) => item.status === 'Declined')
    //         //   );
    //       }}
    //     >
    //       Declined
    //     </p>
    //   </section>
    //   <input value={text} onChange={(e) => setText(e.target.value)}></input>
    //
    //   <button
    //     className="mt-5 p-2 w-1/3 bg-green-400 text-white"
    //     onClick={() =>
    //       dispatch(
    //         addTodo({
    //           id: Date.now(),
    //           text: text,
    //         })
    //       )
    //     }
    //   >
    //     {" "}
    //     Add
    //   </button>
    //
    //   {/* {todos.map((item: any, index: number) => {
    //     return (
    //       <div className="flex justify-between" key={item.id}>
    //         <p className="flex justify-between" key={item.id}>
    //           {item.text}
    //         </p>
    //         <p onClick={() => dispatch(deleteTodo(item))}>Delete</p>
    //       </div>
    //     );
    //   })} */}
    // </>
  );
};

export default Test;