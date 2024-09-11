import { useForm } from 'react-hook-form'
import Button from '@common/components/Button.jsx'

const AddBucketListModal = ({ openModal, closeModal }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = () => {}

  return (
    <form handleSubmit={onSubmit}>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-2/5">
            <h2 className="text-xl font-bold mb-4">버킷리스트 추가하기</h2>
            <input
              type="text"
              placeholder="Description"
              {...register('description')}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />
            <input type="text" placeholder="Priority" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
            <input type="text" placeholder="Category" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
            <input type="date" placeholder="Due Date" className="border border-gray-300 rounded-md p-2 mb-4 w-full" />
            <div className="flex justify-end">
              <Button onClick={closeModal}>닫기</Button>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}

export default AddBucketListModal
