export default function HomeDashboard({user}) {
    return (
        <>
            <div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <h2 className="text-lg">
                      Welcome To Quote Blog
                    </h2>
                    <div className="mt-2 text-sm text-gray-700">
                      Take your steps into quote blog.
                    </div>
                  </div>
                  
                </div>
                                <div className="mt-4">
                  <div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
                    <div className="flex justify-between text-sm font-medium uppercase tracking-wide">
                        
                      <p>Name</p>
                                  </div>
                        <div
                          className="ml-3 font-semibold text-sm text-gray-600 uppercase tracking-wider"
                        >
                          <a href="#" className="">{user.name}</a>
                        </div>
                      </div>
                    
                                  </div>
                </div>
                <div className="mt-4">
                  <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                    <div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path
                            d="M5 8h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm1 2v7h12v-7H6z"
                            className="fill-current text-gray-400"
                          ></path>
                          <path
                            d="M6 12a4 4 0 0 1-4-4 1 1 0 0 1 .1-.45l2-4A1 1 0 0 1 5 3h14a1 1 0 0 1 .9.55l2 4c.06.14.1.3.1.45a4 4 0 0 1-7 2.65 3.99 3.99 0 0 1-6 0A3.99 3.99 0 0 1 6 12z"
                            className="fill-current text-gray-600"
                          ></path>
                        </svg>
                        <div
                          className="ml-3 font-semibold text-sm text-gray-600 uppercase tracking-wider"
                        >
                          <a href="#" className=""
                            >Your home</a
                          >
                        </div>
                      </div>
                      <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700">
                        This is your dashboard. Here you can manage your all 
                        quotes. Also you can checkout your profile status.
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                      >
                        <path
                          d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z"
                          className="fill-current text-gray-400"
                        ></path>
                        <polygon
                          points="21 6 12 10 12 22 21 18"
                          className="fill-current text-gray-600"
                        ></polygon>
                      </svg>
                      <div
                        className="ml-3 font-semibold text-sm text-gray-600 uppercase tracking-wider"
                      >
                          <a href="#" className=""
                            >Create Your Quotes</a
                          >
                        
                      </div>
                    </div>
                    <div className="mt-3 max-w-2xl text-sm text-gray-700">
                      With this section you will find how to create quoute. Just click below the
                      link and you are good to go. Click
                      <a
                        href="#"
                        className="font-bold underline"
                        > here</a
                      >, to createa new quoute command. To learn more, check out our documentation.
                    </div>
                  </div>
                </div>
        </>
    );
}