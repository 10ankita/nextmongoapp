'use Client';

import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation';

export default function RemoveTitle ({ id }) {
  const router = useRouter();
  const removeTitleFunc = async()=> {
    const confirmed = confirm("Are you sure");
    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method: "DELETE",
      });
      console.log(res);
      if(res.ok){
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTitleFunc} className='text-red-400'>
        <HiOutlineTrash size={24} />
    </button>
  );
}