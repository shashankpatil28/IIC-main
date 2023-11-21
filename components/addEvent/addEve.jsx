import React from 'react'

const Add = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-gray-400 rounded-md shadow-md m-10">
      <h1 className="text-xl font-bold capitalize">
        Create Event
      </h1>
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
          {/* <div>
            <label
              className='text-gray-200'
              htmlFor="passwordConfirmation"
            >
              Type Of event
            </label>
            <select className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring">
              <option>one</option>
              <option>Two</option>
              <option>Three</option>
              <option>four</option>
            </select>
          </div> */}
         
          <div>
            <label
              className="text-gray-200"
              htmlFor="passwordConfirmation"
            >
              Date of event
            </label>
            <input
              id="date"
              type="date"
              className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-200"
              htmlFor="passwordConfirmation"
            >
              Description of Event
            </label>
            <textarea
              id="textarea"
              className="block min-h-[15vh] w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md  focus:border-blue-500 focus:outline-none focus:ring"
              defaultValue={""}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-white">
              <div className="space-y-1 text-cente">
                <svg
                  className="mx-auto h-12 w-12 t"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span className="">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1 t">or drag and drop</p>
                </div>
                <p className="text-xs t">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-600">
            create Event
          </button>
        </div>
      </form>
    </section>
  )
}

export default Add