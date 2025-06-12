export default function Home() {
    return (
            <div className="flex" style={{ flexDirection: "column", alignItems: "center" }}>
                <div style={{marginTop: "12rem", marginBottom: "10rem"}} >
                    <h1>Bem vindo!</h1>
                </div>
                <div style={{ width: "26rem" }} >
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                </div>
            </div>);
}
