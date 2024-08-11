import { useEffect } from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import { HiOutlineLink } from 'react-icons/hi'

const SideBarForm = ({ profile, editMode, setEditMode, setProfile }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      nickName: '',
      name: '',
      profileImage: '',
      bio: '',
      links: []
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'links'
  })

  const onSubmit = (data) => {
    setProfile(data)
    setEditMode(false)
  }

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleCancelClick = () => {
    setEditMode(false)
    reset(profile)
  }

  const socialAppend = () => {
    // REVIEWS - 기본적인 validation 체크
    append({ url: '' })
  }

  useEffect(() => {
    reset({
      nickName: profile.nickName || '',
      name: profile.name || '',
      profileImage: profile.profileImage || '',
      bio: profile.bio || '',
      links: profile.links || []
    })
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {editMode ? (
          <div className="flex flex-col items-center space-y-1 text-sm">
            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Name"
                    className="border border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 rounded-md p-2 px-3 py-1 mb-2 w-full"
                  />
                )}
              />
            </div>

            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700">Bio</label>
              <Controller
                name="bio"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="Add a bio"
                    className="border rounded-md h-20 p-2 px-3 mb-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                  />
                )}
              />
            </div>

            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700">Profile Image URL</label>
              <Controller
                name="profileImage"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Profile Image URL"
                    className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                  />
                )}
              />
            </div>

            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700">Social accounts</label>
              {fields.map((item, index) => (
                <div key={item.id} className="flex items-center mb-2 space-x-2">
                  <HiOutlineLink className="text-gray-600 text-lg" />
                  <Controller
                    name={`links[${index}].url`}
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder="Link URL"
                        className="border rounded-md p-2 px-3 py-1 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                      />
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-red-500 rounded-md h-8 w-8 flex items-center justify-center hover:bg-rose-400 hover:text-white duration-100"
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={socialAppend}
                className="border border-gray-300 bg-gray-50 rounded-md h-8 hover:bg-gray-200 duration-100 w-full mt-1 mb-1"
              >
                Add Social Account
              </button>
            </div>

            <div className="flex space-x-1.5 w-full max-w-xs sm:max-w-sm pt-1">
              <button
                type="submit"
                className="border border-rose-400 bg-rose-400 text-white rounded-md h-8 hover:bg-rose-500 duration-100 w-1/6"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelClick}
                className="border border-gray-300 bg-gray-50 rounded-md h-8 hover:bg-gray-200 duration-100 w-1/4"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="border border-rose-200 bg-rose-50 rounded-md h-8 hover:bg-rose-100 duration-100 mb-6 sm:w-full w-full md:w-64 lg:w-72"
            onClick={handleEditClick}
          >
            Edit profile
          </button>
        )}
      </div>
    </form>
  )
}

export default SideBarForm
