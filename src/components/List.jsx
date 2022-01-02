export default function List() {
    return(
        <>
            <div className="w-full min-h-screen bg-gray-200 p-3 sm:p-6 md:p-12">
                <main className="w-full lg:w-3/4 mx-auto flex flex-wrap content-start">
                <div className="w-full sm:w-1/2 md:w-2/3 flex flex-wrap content-start">
                    <div className="w-full p-1">
                        <div id="card-3" className="bg-gray-100 shadow-lg rounded overflow-hidden flex flex-wrap flex-col">
                        <header className="p-3 flex items-center">
                            <img src="http://unsplash.it/64/64" alt="Czebou's avatar" className="rounded-full mr-2" />
                            <div>
                            <p className="w-full text-gray-800"><strong>Czebou</strong> <small className="text-light text-gray-600"> 26 minutes ago</small></p>
                            <p className="w-full text-gray-600 text-xs">@czebou</p>
                            </div>
                        </header>

                        <div className="px-3">
                            <span className="font-semibold text-gray-600 text-sm">Tags:</span>
                            <ul className="inline-block list-none text-sm text-white font-semibold">
                            <li className="inline-block bg-blue-500 px-2 rounded-full">#tailwind_is_awesome</li>
                            <li className="inline-block bg-green-400 px-2 rounded-full">#love_css</li>
                            <li className="inline-block bg-pink-500 px-2 rounded-full">#webdesign</li>
                            </ul>
                        </div>

                        <p className="p-3 text-xl">This is a card that looks like social-media post.
                            <br/>Deal with it! 😎</p>

                        <footer className="w-full border-t border-gray-200 mt-3">
                            <ul className="list-none w-full flex text-center" role="navigation">
                            <li className="inline-block w-1/3">
                                <button className="block w-full p-2 hover:bg-gray-200 text-gray-700 hover:text-pink-600 focus:outline-none focus:bg-pink-100 focus:text-pink-600">
                                <span className="lni-heart"></span>
                                <span className="hidden md:inline">Love</span>
                                </button>
                            </li>
                            <li className="inline-block w-1/3">
                                <button className="block w-full p-2 hover:bg-gray-200 text-gray-700 hover:text-indigo-600 focus:outline-none focus:bg-indigo-100 focus:text-indigo-600">
                                <span className="lni-comment-reply"></span>
                                <span className="hidden md:inline">Comment</span>
                                </button>
                            </li>
                            <li className="inline-block w-1/3">
                                <button className="block w-full p-2 hover:bg-gray-200 text-gray-700 hover:text-blue-500 focus:outline-none focus:bg-blue-100 focus:text-blue-500">
                                <span className="lni-share-alt"></span>
                                <span className="hidden md:inline">Share</span>
                                </button>
                            </li>
                            </ul>
                        </footer>
                        </div>
                    </div>
                </div>
                </main>
            </div>
        </>
    );
}